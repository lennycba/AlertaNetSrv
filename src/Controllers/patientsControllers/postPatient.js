const { Patient, Company } = require ('../../db');
const {Op} = require('sequelize');

const postPatient = async ({
    status,
    companyId,
    membershipNumber,
    role,
    name,
    lastName,
    phone,
    email,
    password,
    address,
    geoCoding,
    medicalHistory,
    image,
})=>{

    const existingCompany = await Company.findByPk(companyId);
    if(!existingCompany){
        return {
            ok: false,
            statusCode: 400,
            message: 'Company not found'
        }
    }

    const existingPatient = await Patient.findOne({
        where: {
            membershipNumber:{
                [Op.like]:membershipNumber,
            },
        }
    });

    if(existingPatient){
        return {
            ok: false,
            statusCode: 400,
            message: 'Patient already exists'
        }
    }

    const newPatient = await Patient.create({
        status,
        companyId,
        membershipNumber,
        role,
        name,
        lastName,
        phone,
        email,
        password,
        address,
        geoCoding,
        medicalHistory,
        image,
    });


    return {
        ok: true,
        statusCode: 201,
        message: 'Patient created successfully',
        patient: newPatient
    };
}

module.exports = postPatient