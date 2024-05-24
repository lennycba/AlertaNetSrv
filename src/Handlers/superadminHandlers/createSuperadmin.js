const bcrypt = require('bcryptjs');
const postSuperadmin = require('../../Controllers/superadminControllers/postSuperadmin');

const createSuperadmin = async (req, res) => {
  const {
    name,
    lastName,
    phone,
    email,
    password,
    address,
    role,
    image,
  } = req.body;

  try {
    const superadminData = {
      name,
      lastName,
      phone,
      email,
      pass: bcrypt.hashSync(password),
      address,
      role,
      image,
    }


    const { ok, user, statusCode, message } = await postSuperadmin(superadminData);

    if (!ok) {
      return res.status(statusCode).json({ ok, message })
    }
    return res.status(statusCode).json({ ok, message, user })

  } catch (error) {
    res.status(500).json({ ok: false, message: error.message })
  }
}

module.exports = createSuperadmin;