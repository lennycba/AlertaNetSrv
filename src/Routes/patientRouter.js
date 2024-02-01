const { Router } = require("express");
const patientRouter = Router();
const getPatients = require('../Handlers/patientsHandlers/getPatients');
const createPatient = require('../Handlers/patientsHandlers/createPatient');
const getMember = require("../Handlers/patientsHandlers/getMember");
const getByName = require("../Handlers/patientsHandlers/getByName");
const editPatient = require("../Handlers/patientsHandlers/editPatient");


patientRouter.get('/', getPatients);
patientRouter.get('/search',getByName)
patientRouter.get('/:nMember',getMember)
patientRouter.post('/',createPatient);
patientRouter.put('/',editPatient)

module.exports = patientRouter;