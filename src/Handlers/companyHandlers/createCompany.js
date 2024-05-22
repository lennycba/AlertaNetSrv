const postCompany = require('../../Controllers/companyControllers/postCompany');

const createCompany = async (req, res) => {
  const { user } = req;

  if ( user.role !== 'super_admin') return res.status(401).json({ ok: false, message: 'unauthorized' })


  const {
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
    location,
    companyLogo
  } = req.body;

  try {
    const companyData = {
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
      location,
      createdBy: user.id,
      updatedBy: user.id,
      companyLogo
    }


    const { ok, company, statusCode, message } = await postCompany(companyData);

    if (!ok) {
      return res.status(statusCode).json({ ok, message })
    }
    return res.status(statusCode).json({ ok, message, company })

  } catch (error) {
    res.status(500).json({ ok: false, message: error.message })
  }
}

module.exports = createCompany;