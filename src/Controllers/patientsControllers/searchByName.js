const {Patient} = require('../../db');
const {Op,literal} = require('sequelize');


const searchByName = async (fullName) => {

    let patients = await Patient.findAll({
        where: literal(`CONCAT(name,' ', lastname) ILIKE :fullName`),
        replacements: { fullName: `%${fullName}%` },  
    });

    if (patients.length <1){
        patients = await Patient.findAll({
            where: literal(`CONCAT(lastname,' ', name) ILIKE :fullName`),
            replacements: { fullName: `%${fullName}%` },
        });
    }

    if (patients.length <1) throw Error('no se encontro el afiliado buscado, por favor compruebe su ortografía y vuelva a intentarlo...')

    return patients;
};


module.exports = searchByName;