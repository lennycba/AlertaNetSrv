const postPersonal = require('../../Controllers/personalControllers/postPersonal')
const bcrypt = require('bcryptjs');

const createPersonal = async (req, res) => {
  const {
    companyId,
    employeeNumber,
    name,
    lastName,
    phone,
    email,
    password,
    address,
    geoCoding,
    role,
    status,
    image,
  } = req.body;

  try {
    const personalData = {
      companyId,
      employeeNumber,
      name,
      lastName,
      phone,
      email,
      pass: bcrypt.hashSync(password),
      address,
      geoCoding,
      role,
      status,
      image,
    }


    const { ok, user, statusCode, message } = await postPersonal(personalData);

    if (!ok) {
      return res.status(statusCode).json({ ok, message })
    }
    return res.status(statusCode).json({ ok, message, user })

  } catch (error) {
    res.status(500).json({ ok: false, message: error.message })
  }
}

module.exports = createPersonal;