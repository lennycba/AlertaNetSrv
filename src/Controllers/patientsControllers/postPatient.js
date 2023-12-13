const {Patient} = require ('../../db');
const {Op} = require('sequelize');

const postPatient = async ({
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
            name:{
                [Op.iLike]:name,
            },
        }
    });

    if(existingPatient){
        throw Error("Ya existe un paciente con estos datos");
    }

    const newPatient = await Patient.create({
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