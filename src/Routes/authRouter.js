const { Router } = require("express");

const signInPatient = require("../Handlers/auth/sign-in-patients");
const signInStaff = require("../Handlers/auth/sign-in-staff");


const authRouter = Router();
// const loginUser = require("../Handlers/alertsHandlers/getAlerts");

authRouter.post("/patient/sign-in", signInPatient);

authRouter.post("/staff/sign-in", signInStaff);


module.exports = authRouter;
