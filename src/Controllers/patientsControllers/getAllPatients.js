const {Patient, Company} = require('../../db');

const getAllPatients = async () => {
    const patients = await Patient.findAll({
        include: {
            model: Company,
            attributes: ['id', 'companyName', 'email', 'phone', 'address', 'city', 'province', 'country', 'location', 'companyLogo'],
        },
        attributes: {
            exclude: 'password'
        }
    });

    if(patients.length > 0) return patients;
    else throw Error('No hay pacientes cargados hasta el momento')
}


module.exports = getAllPatients;