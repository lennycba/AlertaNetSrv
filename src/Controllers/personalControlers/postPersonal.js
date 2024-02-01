const {Personal} = require ('../../db');
const {Op} = require('sequelize');

const postPersonal = async ({
        nPersonal,
        name,
        lastName,
        phone,
        role,
        status,
        image,
})=>{
    const existingPersonal = await Personal.findOne({
        where: {
            nPersonal:{
                [Op.like]:nPersonal,
            },
        }
    });

    if(existingPersonal){
        throw Error("Ya existe un miembro del personal con estos datos");
    }

    const newPersonal= await Personal.create({
        nPersonal,
        name,
        lastName,
        phone,
        role,
        status,
        image,
    });


    return newPersonal;
}

module.exports = postPersonal;