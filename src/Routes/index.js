const { Router } = require("express");
const mainRouter = Router();
const alertRouter = require("./alertRouter");

mainRouter.use("/alert", alertRouter);


module.exports= mainRouter;