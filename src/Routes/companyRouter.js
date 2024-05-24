const { Router } = require("express");
const createCompany = require("../Handlers/companyHandlers/createCompany");
const verifyToken = require("../middlewares/authMiddleware");

const companyRouter = Router();

// Todo: Implementar las rutas faltantes del CRUD

companyRouter.post('/', verifyToken, createCompany);
// companyRouter.put('/', editCompany)

module.exports = companyRouter;