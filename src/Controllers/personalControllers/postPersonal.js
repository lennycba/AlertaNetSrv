const { Personal, Company } = require('../../db');
const { Op } = require('sequelize');

const postPersonal = async ({
  companyId,
  employeeNumber,
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

  const existingCompany = await Company.findByPk(companyId);
    if(!existingCompany){
        return {
            ok: false,
            statusCode: 400,
            message: 'Company not found'
        }
    }

  const existingPersonal = await Personal.findOne({
    where: {
      employeeNumber: {
        [Op.like]: employeeNumber,
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
    companyId,
    employeeNumber,
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