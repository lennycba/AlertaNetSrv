const postPatient = require('../../Controllers/patientsControllers/postPatient')
const bcrypt = require('bcryptjs');

const createPatient = async (req,res) =>{
    const{
        status,
        nMember,
        role,
        name,
        lastName,
        phone,
        email,
        password,
        address,
        geoCoding,
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
            email,
            password: bcrypt.hashSync(password),
            address,
            geoCoding,
            medicalHistory,
            image,
        }

    
        const newPatient = await postPatient(patientData);
        return res.status(201).json(newPatient)

    } catch (error) {
        res.status(400).json(error.message)
    }
}

module.exports = createPatient;