const { Router } = require("express");
const personalRouter = Router();
const getPersonal = require('../Handlers/personalHandlers/getPersonal');
const createPersonal = require('../Handlers/personalHandlers/createPersonal');
const editPersonal = require('../Handlers/personalHandlers/editPersonal');
const getPByName = require('../Handlers/personalHandlers/getPByName');


personalRouter.get('/',getPersonal);
personalRouter.post('/',createPersonal);
personalRouter.put('/',editPersonal);
personalRouter.get('/search',getPByName)




module.exports = personalRouter;