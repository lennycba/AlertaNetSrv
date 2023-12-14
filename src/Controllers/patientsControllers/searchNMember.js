const {Patient} = require('../../db');
const {Op} = require('sequelize');


const searchNMember = async (nMember) =>{
    const searchP = await Patient.findOne({
        where: {
            nMember:nMember,
        }
    })

    if(searchP) return searchP;
    else throw Error('no se encontró el afiliado buscado')
}

module.exports = searchNMember;