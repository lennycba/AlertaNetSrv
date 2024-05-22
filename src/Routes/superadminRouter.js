const { Router } = require("express");
const createSuperadmin = require("../Handlers/superadminHandlers/createSuperadmin");
const editSuperadmin = require("../Handlers/superadminHandlers/editSuperadmin");
const superadminRouter = Router();

// Todo: Implementar las rutas faltantes del CRUD

superadminRouter.post('/', createSuperadmin);
superadminRouter.put('/', editSuperadmin)

module.exports = superadminRouter;