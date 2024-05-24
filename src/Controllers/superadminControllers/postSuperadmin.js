const { UserAdmin } = require('../../db');

const { Op } = require('sequelize');

const postSuperadmin = async ({
  name,
  lastName,
  phone,
  email,
  pass,
  address,
  role,
  image,
}) => {
  const existingPersonal = await UserAdmin.findOne({
    where: { email }
  });

  if (existingPersonal) {
    return {
      ok: false,
      statusCode: 401,
      message: "A Superadmin already exists with this data"
    }
  }

  const newPersonal = await UserAdmin.create({
    name,
    lastName,
    phone,
    email,
    password: pass,
    address,
    role,
    image
  });

  const { password, ...user } = newPersonal.dataValues
  return {
    ok: true,
    statusCode: 201,
    message: "Superadmin created successfully",
    user
  };
}

module.exports = postSuperadmin;