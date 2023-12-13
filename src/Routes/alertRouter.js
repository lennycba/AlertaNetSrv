const { Router } = require("express");
const alertRouter = Router();
const getAlerts = require('../Handlers/alertsHandlers/getAlerts');
const getById = require('../Handlers/gralHandlers/getById');

//alertRouter.post('/', createTicket);
alertRouter.get('/', getAlerts);
alertRouter.get('/:id', getById);

module.exports = alertRouter;