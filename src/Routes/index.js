const { Router } = require("express");
const mainRouter = Router();
const alertRouter = require("./alertRouter");
const patientRouter = require('./patientRouter');
const personalRouter = require("./personalRouter");
const authRouter = require("./authRouter");

mainRouter.use('/alert', alertRouter);
mainRouter.use('/patient', patientRouter);
mainRouter.use('/personal', personalRouter);
mainRouter.use('/auth', authRouter)

module.exports = mainRouter;