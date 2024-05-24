const { Company } = require('../../db');

const { Op } = require('sequelize');

const postCompany = async ({
  companyName,
  email,
  phone,
  address,
  city,
  province,
  country,
  companyType,
  companySize,
  membershipType,
  geoCoding,
  createdBy,
  updatedBy,
  companyLogo
}) => {
  const existingCompany = await Company.findOne({
    where: { email }
  });

  if (existingCompany) {
    return {
      ok: false,
      statusCode: 401,
      message: "A Company already exists with this data"
    }
  }

  const newCompany = await Company.create({
    companyName,
    email,
    phone,
    address,
    city,
    province,
    country,
    companyType,
    companySize,
    membershipType,
    geoCoding,
    createdBy,
    updatedBy,
    companyLogo
  });

  return {
    ok: true,
    statusCode: 201,
    message: "Company created successfully",
    company: newCompany
  };
}

module.exports = postCompany;