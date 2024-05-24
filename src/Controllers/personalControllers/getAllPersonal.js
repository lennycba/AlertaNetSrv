const {Personal} = require('../../db');

const getAllPersonal = async () => {
    const personal = await Personal.findAll();

    if(personal.length > 0) return personal;
    else throw Error('No existen miembros de personal cargados hasta el momento')
}


module.exports = getAllPersonal;