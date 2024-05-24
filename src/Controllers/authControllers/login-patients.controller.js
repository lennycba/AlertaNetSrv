const dotenv = require('dotenv')
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { Patient } = require('../../db');

dotenv.config()

const { JWT_ISSUER, JWT_AUDIENCE } = process.env

const loginPatients = async (email, pass) => {

  const user = await Patient.findOne({
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
      companyId: user.companyId,
      role: user.role,
    }
    const { password, ...rest } = user.dataValues

    const token = jwt.sign(payload, process.env.SECRET_KEY, {
      expiresIn: '5d',
      issuer: JWT_ISSUER,
      audience: JWT_AUDIENCE
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

module.exports = loginPatients