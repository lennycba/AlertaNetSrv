const {Patient} = require('../../db');

const getAllPatients = async () => {
    const patients = await Patient.findAll();

    if(patients.length > 0) return patients;
    else throw Error('No hay pacientes cargados hasta el momento')
}


module.exports = getAllPatients;