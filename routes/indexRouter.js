const { Router } = require("express");
const messageController = require("../controllers/messageController");
const indexRouter = Router();

indexRouter.get("/", messageController.getMessages);

indexRouter.get("/new", messageController.getNewMessage);

// indexRouter.get("/messages/:id", (req, res) => {
//   const id = req.params.id;
//   const message = messages[id];
//   res.render("message", { message: message });
// });

indexRouter.post("/new", messageController.postNewMessage);
// indexRouter.post("/new", (req, res) => {
//   const text = req.body.message;
//   const user = req.body.name;
//   messages.push({ text: text, user: user, added: new Date() });
//   res.redirect("/");
// });

module.exports = indexRouter;
