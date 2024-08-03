const {Patient} = require('../../db');
const {Op,literal} = require('sequelize');


const searchByName = async (fullName) => {

    let patients = await Patient.findAll({
        where: literal(`CONCAT(name,' ', lastName) ILIKE :fullName`),
        replacements: { fullName: `%${fullName}%` },  
        attributes: { exclude: 'password' }
    });

    if (patients.length <1){
        patients = await Patient.findAll({
            where: literal(`CONCAT(lastName,' ', name) ILIKE :fullName`),
            replacements: { fullName: `%${fullName}%` },
            attributes: { exclude: 'password' }
        });
    }

    if (patients.length <1) throw Error('no se encontró el afiliado buscado, por favor compruebe su ortografía y vuelva a intentarlo...')

    return patients;
};


module.exports = searchByName;