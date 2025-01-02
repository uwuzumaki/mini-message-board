const { Router } = require("express");
const messageController = require("../controllers/messageController");
const indexRouter = Router();

indexRouter.get("/", messageController.getMessages);

indexRouter.get("/new", messageController.getNewMessage);

indexRouter.get("/messages/:id", messageController.getIDMessage);

indexRouter.post("/new", messageController.postNewMessage);

module.exports = indexRouter;
