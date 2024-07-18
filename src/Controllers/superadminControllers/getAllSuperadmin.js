const { UserAdmin } = require("../../db");

const getAllAdmin = async () => {
  const userAdmins = await UserAdmin.findAll();

  if (userAdmins.length > 0)
    return {
      statusCode: 200,
      ok: true,
      message: "Admin List",
      userAdmins: userAdmins,
    };
  if (userAdmins.length === 0)
    return {
      statusCode: 404,
      ok: false,
      message: "No Admin found",
    };
};

module.exports = getAllAdmin;
