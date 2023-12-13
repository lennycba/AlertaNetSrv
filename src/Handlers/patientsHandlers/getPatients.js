const getAllPatients = require('../../Controllers/patientsControllers/getAllPatients');

const getPatients = async (req,res) =>{
    try {
        const allPatients = await getAllPatients();
        res.status(200).json(allPatients);
    } catch (error) {
        res.status(200).json(error.message)
    }
}

module.exports = getPatients;