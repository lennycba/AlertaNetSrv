const { Router } = require("express");
const mainRouter = Router();
const alertRouter = require("./alertRouter");
const patientRouter = require('./patientRouter');
const personalRouter = require("./personalRouter");

mainRouter.use('/alert', alertRouter);
mainRouter.use('/patient',patientRouter);
mainRouter.use('/personal',personalRouter);
module.exports= mainRouter;