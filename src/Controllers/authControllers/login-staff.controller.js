const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { Personal } = require('../../db');

const loginStaff = async (email, pass) => {

  const user = await Personal.findOne({
    where: {
      email
    }
  })

  if (!user) {
    return {
      ok: false, 
      statusCode: 404,
      message: "User not found"
    }
  } else {
    const dataPassword = user.password;
    const validPassword = bcryptjs.compareSync(pass, dataPassword)


    if (!validPassword) {
      return {
        ok: false, 
        statusCode: 401,
        message: "Unauthorized"
      }
    }

    const payload = {
      id: user.id,
      role: user.role,
    }
    const { password, ...rest } = user.dataValues

    const token = jwt.sign(payload, process.env.SECRET_KEY, {
      expiresIn: '30d',
    })


    return {
      ok: true, 
      statusCode: 200,
      token,
      user: rest,
      message: "Login success"
    }
  }
}

module.exports = loginStaff