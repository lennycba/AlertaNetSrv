const {Personal} = require('../../db');
const {Op,literal} = require('sequelize');


const searchPByName = async (fullName) => {

    let personal = await Personal.findAll({
        where: literal(`CONCAT(name,' ', lastName) ILIKE :fullName`),
        replacements: { fullName: `%${fullName}%` },  
    });

    if (personal.length <1){
        personal = await Personal.findAll({
            where: literal(`CONCAT(lastName,' ', name) ILIKE :fullName`),
            replacements: { fullName: `%${fullName}%` },
        });
    }

    if (personal.length <1) throw Error('no se encontro el miembro del personal buscado, por favor compruebe su ortografía y vuelva a intentarlo...')

    return personal;
};


module.exports = searchPByName;