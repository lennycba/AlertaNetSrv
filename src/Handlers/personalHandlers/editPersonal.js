const updatePersonal = require('../../Controllers/personalControlers/updatePersonal')


//ACLARACIÓN: es necesario corregir la req de IMAGE para que tome la ruta de cloudinary cuando claudinary se implemente

const editPersonal = async (req,res) =>{
    const{
        nPersonal,
        name,
        lastName,
        phone,
        role,
        status,
        image,
    } = req.body;


    try {
        const personalData = {
                nPersonal,
                name,
                lastName,
                phone,
                role,
                status,
                image,
        }
        await updatePersonal(personalData);

        res.status(200).json("El miembro del personal ha sido correctamente actualizado");

    } catch (error) {
        res.status(200).json({error:error.message});
    }
}


    module.exports= editPersonal;