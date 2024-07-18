const { Router } = require("express");

const signInPatient = require("../Handlers/auth/sign-in-patients");
const signInStaff = require("../Handlers/auth/sign-in-staff");
const signInSuperadmin = require("../Handlers/auth/sign-in-superadmin");
const signInMobile = require("../Handlers/auth/sign-in-mobile");

const authRouter = Router();
// const loginUser = require("../Handlers/alertsHandlers/getAlerts");

authRouter.post("/patient/sign-in", signInPatient);

authRouter.post("/staff/sign-in", signInStaff);

authRouter.post("/superadmin/sign-in", signInSuperadmin);

authRouter.post("/mobile/sign-in", signInMobile);

module.exports = authRouter;
