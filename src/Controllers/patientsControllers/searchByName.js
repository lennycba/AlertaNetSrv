const {Patient} = require('../../db');
const {Op} = require('sequelize');


const searchByName = async(name,lastName) =>{
    const patients = await Patient.findAll({
        where:{
            [Op.and]:[
                {name:{[Op.iLike]:`%${name}%`}},
                {lastName:{[Op.iLike]:`%${lastName}%`}},
            ]
        }
    })
console.log('patientssssssssssssssssssssssssssss',patients)
    //if(patients > 0) 
    return patients;
    //else throw Error('los datos no coinciden con ningun afiliado');
};


module.exports =searchByName;