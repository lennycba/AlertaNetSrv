const { Router } = require("express");
const createSuperadmin = require("../Handlers/superadminHandlers/createSuperadmin");
const editSuperadmin = require("../Handlers/superadminHandlers/editSuperadmin");
const getSuperadmin = require("../Handlers/superadminHandlers/getAllsuperadmin");
const deleteSuperadmin = require("../Handlers/superadminHandlers/deleteSuperadmin");
const verifyToken = require("../middlewares/authMiddleware");
const authorizeRoles = require("../middlewares/authorizeRoles");

const superadminRouter = Router();

// Todo: Implementar las rutas faltantes del CRUD
superadminRouter.get("/", getSuperadmin);
superadminRouter.post("/", createSuperadmin);
superadminRouter.put("/", editSuperadmin);
superadminRouter.delete("/:id", verifyToken, authorizeRoles("Superadmin"), deleteSuperadmin);

module.exports = superadminRouter;
