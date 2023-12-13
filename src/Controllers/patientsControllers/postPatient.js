const {Patient} = require ('../../db');
const {Op} = require('sequelize');

const postPatient = async ({
    nMember,
    role,
    name,
    lastName,
    phone,
    address,
    medicalHistory,
    image,
})=>{
    const existingPatient = await Patient.findOne({
        where: {
            nMember:{
                [Op.like]:nMember,
            },
        }
    });

    if(existingPatient){
        throw Error("Ya existe un paciente con estos datos");
    }

    const newPatient = await Patient.create({
        nMember,
        role,
        name,
        lastName,
        phone,
        address,
        medicalHistory,
        image,
    });


    return newPatient;
}

module.exports = postPatient