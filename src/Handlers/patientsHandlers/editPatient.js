const updatePatient = require('../../Controllers/patientsControllers/updatePatient')


//ACLARACIÓN: es necesario corregir la req de IMAGE para que tome la ruta de cloudinary cuando claudinary se implemente

const editPatient = async (req,res) =>{
    const{
        status,
        nMember,
        role,
        name,
        lastName,
        phone,
        address,
        medicalHistory,
        image,
    } = req.body;


    try {
        const patientData = {
            status,
            nMember,
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