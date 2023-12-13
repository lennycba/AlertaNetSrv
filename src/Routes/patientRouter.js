const { Router } = require("express");
const patientRouter = Router();
const getPatients = require('../Handlers/patientsHandlers/getPatients');
const getById = require('../Handlers/gralHandlers/getById');
const createPatient = require('../Handlers/patientsHandlers/createPatient');


patientRouter.get('/', getPatients);
patientRouter.get('/:id', getById);
patientRouter.post('/',createPatient);

module.exports = patientRouter;