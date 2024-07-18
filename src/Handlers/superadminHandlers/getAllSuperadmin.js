const getAllSuperAdmin = require("./../../Controllers/superadminControllers/getAllSuperadmin");

const getSuperAdmin = async (req, res) => {
  try {
    const { ok, statusCode, message } = await getAllSuperAdmin();

    return res.status(statusCode).json({ ok, message });
  } catch (error) {
    res.status(500).json({ ok: false, message: error.message });
  }
};

module.exports = getSuperAdmin;
