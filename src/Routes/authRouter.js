const { Router } = require("express");
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')


const authRouter = Router();
// const loginUser = require("../Handlers/alertsHandlers/getAlerts");
const { Patient } = require('../db')

authRouter.post("/patient/sign-in", async (req, res) => {
  const {email, password} = req.body

  const user = await Patient.findOne({
    where: {
      email
    }
  })

  if (!user) {
    res.status(404).json({ ok: false, message: "user not found" })
  } else {

    const dataPassword =user.password;
    const validPassword = bcryptjs.compareSync(password, dataPassword)
  
    if (!validPassword) {
      res.status(401).json({ ok: false, message: "unauthorized"})
    } else {

      const payload = {
        id: user.id,
        role: user.role,
      }

      const token = jwt.sign(payload, process.env.SECRET_KEY, {
        expiresIn: '30d',
      })
      res.status(200).json({ ok: true, message: "login success", token })
    }
  }

});


module.exports = authRouter;
