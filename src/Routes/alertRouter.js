const { Router } = require("express");
const alertRouter = Router();
const getAlerts = require("../Handlers/alertsHandlers/getAlerts");
const getById = require("../Handlers/gralHandlers/getById");
const createTicket = require("../Handlers/alertsHandlers/createTicket");

//alertRouter.post('/', createTicket);
alertRouter.get("/", getAlerts);
alertRouter.get("/:id", getById);
alertRouter.post("/", createTicket);

module.exports = alertRouter;
