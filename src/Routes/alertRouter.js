const { Router } = require("express");
const alertRouter = Router();
const getAlerts = require("../Handlers/alertsHandlers/getAlerts");
const getById = require("../Handlers/gralHandlers/getById");
const createTicket = require("../Handlers/alertsHandlers/createTicket");
const verifyToken = require("../middlewares/authMiddleware");

//alertRouter.post('/', createTicket);
alertRouter.get("/", getAlerts);

alertRouter.post("/", verifyToken, createTicket);

module.exports = alertRouter;
