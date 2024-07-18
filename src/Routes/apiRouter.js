const { Router } = require("express");
const getById = require("../Handlers/gralHandlers/getById");
const apiRouter = Router();

// agregar /search/:id
apiRouter.get("/:id", getById);


module.exports = apiRouter