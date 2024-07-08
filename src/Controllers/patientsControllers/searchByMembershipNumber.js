const {Patient, Company} = require('../../db');
const {Op} = require('sequelize');


const searchByMembershipNumber = async (membershipNumber) =>{
    const searchP = await Patient.findOne({
        where: {
            membershipNumber,
        },
        include: {
            model: Company,
            attributes: ['id', 'companyName', 'email', 'phone', 'address', 'city', 'province', 'country', 'companyLogo'],
        },
        attributes: { 
            exclude: 'password' 
        }
    })

    if(searchP) return searchP;
    else throw Error('no se encontró el afiliado buscado')
}

module.exports = searchByMembershipNumber;