
const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')

dotenv.config()

const { SECRET_KEY, JWT_ISSUER, JWT_AUDIENCE } = process.env

const verifyToken = (req, res, next) => {
  const token = req.cookies['session-token']
  

  if (!token) return res.status(401).json({ success: false, message: 'Token no proporcionado' })
  

  try {
    const verified = jwt.verify(token, SECRET_KEY, {
      issuer: JWT_ISSUER,
      audience: JWT_AUDIENCE
    })
    req.user = verified
    next()
  } catch (error) {
    res.status(400).json({ error: 'expired or not valid token' })
  }
}

module.exports = verifyToken