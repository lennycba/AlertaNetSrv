const { Router } = require("express");

const signIn = require("../Handlers/auth/sign-in");
const signInStaff = require("../Handlers/auth/sign-in-staff");
const signInSuperadmin = require("../Handlers/auth/sign-in-superadmin");


const authRouter = Router();
// const loginUser = require("../Handlers/alertsHandlers/getAlerts");

authRouter.post("/sign-in", signIn);

// Reemplazar handler
authRouter.post("/vehicle/sign-in", signInStaff);

authRouter.post("/superadmin/sign-in", signInSuperadmin);


module.exports = authRouter;
