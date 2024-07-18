const { UserAdmin } = require("../../db");

const remuveSuperAdmin = async (id) => {
  let adminUserToDelete = await UserAdmin.findOne({ id });
  if (!adminUserToDelete) {
    return {
      statusCode: 404,
      ok: false,
      message: "Superadmin not found",
    };
  } else {
    await personalToUpdate.save();
    return personalToUpdate;
  }
};

module.exports = remuveSuperAdmin;
