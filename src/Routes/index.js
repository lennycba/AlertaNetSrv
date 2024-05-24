const { Router } = require("express");
const mainRouter = Router();
const alertRouter = require("./alertRouter");
const patientRouter = require('./patientRouter');
const personalRouter = require("./personalRouter");
const authRouter = require("./authRouter");
const superadminRouter = require("./superadminRouter");
const companyRouter = require("./companyRouter");
const seederRouter = require("./seederRouter");

mainRouter.use('/alert', alertRouter);
mainRouter.use('/patient', patientRouter);
mainRouter.use('/personal', personalRouter);
mainRouter.use('/superadmin', superadminRouter);
mainRouter.use('/auth', authRouter)
mainRouter.use('/company', companyRouter)
mainRouter.use('/seed', seederRouter)

module.exports = mainRouter;