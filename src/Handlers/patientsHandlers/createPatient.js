const postPatient = require('../../Controllers/patientsControllers/postPatient')


const createPatient = async (req,res) =>{
    const{
        nMember,
        role,
        name,
        lastName,
        phone,
        address,
        medicalHistory,
        image,
    } = req.body;

console.log(req.body)
    try {
        const patientData = {
            nMember,
            role,
            name,
            lastName,
            phone,
            address,
            medicalHistory,
            image,
        }

    
        const newPatient = await postPatient(patientData);
        return res.status(201).json(newPatient)

    } catch (error) {
        res.status(200).json(error.message)
    }
}

module.exports = createPatient;