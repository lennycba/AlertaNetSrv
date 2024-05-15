const { Personal } = require('../../db');
const { Op } = require('sequelize');

const postPersonal = async ({
  nPersonal,
  name,
  lastName,
  phone,
  email,
  pass,
  role,
  address,
  geoCoding,
  status,
  image,
}) => {
  const existingPersonal = await Personal.findOne({
    where: {
      nPersonal: {
        [Op.like]: nPersonal,
      },
    }
  });

  if (existingPersonal) {
    return {
      ok: false,
      statusCode: 401,
      message: "A staff member already exists with this data"
    }
  }

  const newPersonal = await Personal.create({
    nPersonal,
    name,
    lastName,
    phone,
    email,
    password: pass,
    role,
    address,
    geoCoding,
    status,
    image,
  });

  const { password, ...user } = newPersonal.dataValues
  return {
    ok: true,
    statusCode: 201,
    message: "Patient created successfully",
    user
  };
}

module.exports = postPersonal;