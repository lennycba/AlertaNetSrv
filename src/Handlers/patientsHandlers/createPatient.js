const postPatient = require('../../Controllers/patientsControllers/postPatient')
const bcrypt = require('bcryptjs');

const createPatient = async (req,res) =>{
    const{
        status,
        companyId,
        membershipNumber,
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
            companyId,
            membershipNumber,
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

    
        const {ok, statusCode, message, patient} = await postPatient(patientData);
        return res.status(statusCode).json({ok, message, patient})

    } catch (error) {
        res.status(500).json(error.message)
    }
}

module.exports = createPatient;