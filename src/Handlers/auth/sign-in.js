const login = require("../../Controllers/authControllers/login.controller");


const signIn = async (req, res) => {
  const {email, password} = req.body

  try {
    const { statusCode, ok, message, user, token } = await login(email, password)

    if (!ok) {
      res.status(statusCode).json({ ok, message })
    } else {
      res.cookie('session-token', token, { 
        path: '/',
        httpOnly: true,
        secure: true, 
      })
      res.status(statusCode).json({ ok , message, user })
    }
  } catch (error) {
    res.status(500).json({ ok: false, message: "Internal server error"})
  }
}

module.exports = signIn