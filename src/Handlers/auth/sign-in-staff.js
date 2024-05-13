const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { Personal } = require('../../db');

const signInStaff = async (req, res) => {
  const {email, password} = req.body

  const user = await Personal.findOne({
    where: {
      email
    }
  })

  if (!user) {
    res.status(404).json({ ok: false, message: "user not found" })
  } else {

    const dataPassword = user.password;
    const validPassword = bcryptjs.compareSync(password, dataPassword)
  
    if (!validPassword) {
      res.status(401).json({ ok: false, message: "unauthorized"})
    } else {

      const payload = {
        id: user.id,
        role: user.role,
      }

      const { password, ...rest } = user.dataValues
      console.log(rest);

      const token = jwt.sign(payload, process.env.SECRET_KEY, {
        expiresIn: '30d',
      })
      res.cookie('session-token', token, { 
        path: '/',
        httpOnly: true,
        secure: true, 
      })
      res.status(200).json({ ok: true, user: rest, message: "login success" })
    }
  }
}

module.exports = signInStaff