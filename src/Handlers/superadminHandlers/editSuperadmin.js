


//ACLARACIÓN: es necesario corregir la req de IMAGE para que tome la ruta de cloudinary cuando claudinary se implemente

const updateSuperadmin = require("../../Controllers/superadminControllers/updateSuperadmin");

const editSuperadmin = async (req,res) =>{
    const{
        id,
        name,
        lastName,
        phone,
        image,
    } = req.body;


    try {
        const SuperadminData = {
                id,
                name,
                lastName,
                phone,
                image,
        }
        await updateSuperadmin(SuperadminData);

        res.status(200).json("El miembro del Superadmin ha sido correctamente actualizado");

    } catch (error) {
        res.status(200).json({error:error.message});
    }
}


    module.exports= editSuperadmin;