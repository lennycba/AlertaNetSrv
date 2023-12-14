const { Patient } = require("../../db");
const { Op } = require("sequelize");

const searchByName = async (name, lastName) => {
  let whereCondition;

  if (name && lastName) {
    whereCondition = {
      [Op.and]: [{ name: { [Op.iLike]: `%${name}%` } }, { lastName: { [Op.iLike]: `%${lastName}%` } }],
    };
  } else if (name || lastName) {
    whereCondition = {
      [Op.or]: [
        { name: { [Op.iLike]: `%${name || lastName}%` } },
        { lastName: { [Op.iLike]: `%${name || lastName}%` } },
      ],
    };
  } else {
    throw new Error("Se debe proporcionar al menos un nombre o un apellido.");
  }

  const patients = await Patient.findAll({
    where: whereCondition,
  });

  return patients;
};

module.exports = searchByName;

// const searchByName = async(name,lastName) =>{
//     const patients = await Patient.findAll({
//         where:{
//             [Op.and]:[
//                 {name:{[Op.iLike]:`%${name}%`}},
//                 {lastName:{[Op.iLike]:`%${lastName}%`}},
//             ]
//         }
//     })
// console.log('patientssssssssssssssssssssssssssss',patients)
//     //if(patients > 0)
//     return patients;
//     //else throw Error('los datos no coinciden con ningun afiliado');
// };

module.exports = searchByName;
