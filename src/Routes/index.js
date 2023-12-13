const { Router } = require("express");
const mainRouter = Router();
const alertRouter = require("./alertRouter");
const patientRouter = require('./patientRouter');

mainRouter.use('/alert', alertRouter);
mainRouter.use('/patient',patientRouter);

module.exports= mainRouter;