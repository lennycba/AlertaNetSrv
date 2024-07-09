const { Router } = require("express");
const getById = require("../Handlers/gralHandlers/getById");
const apiRouter = Router();

apiRouter.get("/:id", getById);


module.exports = apiRouter