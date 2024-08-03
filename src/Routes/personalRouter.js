const { Router } = require("express");
const personalRouter = Router();
const getPersonal = require("../Handlers/personalHandlers/getPersonal");
const createPersonal = require("../Handlers/personalHandlers/createPersonal");
const editPersonal = require("../Handlers/personalHandlers/editPersonal");
const getPByName = require("../Handlers/personalHandlers/getPByName");
const deletePersonal = require("../Handlers/personalHandlers/deletePersonal");

personalRouter.get("/", getPersonal);
personalRouter.post("/", createPersonal);
personalRouter.put("/", editPersonal);
personalRouter.get("/search", getPByName);
personalRouter.delete("/:id", deletePersonal);

module.exports = personalRouter;
