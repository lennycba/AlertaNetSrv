const updatePatient = require('../../Controllers/patientsControllers/updatePatient')


//ACLARACIÓN: es necesario corregir la req de IMAGE para que tome la ruta de cloudinary cuando claudinary se implemente

const editPatient = async (req,res) =>{
    const { id } = req.user
    const image = req.files.image.tempFilePath
    
    const{
        status,
        role,
        name,
        lastName,
        phone,
        address,
        medicalHistory,
    } = req.body;


    try {
        const patientData = {
            id,
            status,
            role,
            name,
            lastName,
            phone,
            address,
            medicalHistory,
            image,
        }
        await updatePatient(patientData);

        res.status(200).json("El paciente ha sido correctamente actualizado");

    } catch (error) {
        res.status(200).json({error:error.message});
    }
}


    module.exports=editPatient;