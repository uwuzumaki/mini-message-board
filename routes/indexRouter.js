const { Router } = require("express");

const indexRouter = Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

indexRouter.get("/", (req, res) => {
  res.render("index", { title: "Mini Message Board", messages: messages });
});

indexRouter.get("/new", (req, res) => {
  res.render("new");
});

indexRouter.post("/new", (req, res) => {
  const text = req.body.message;
  const user = req.body.name;
  messages.push({ text: text, user: user, added: new Date() });
  res.redirect("/");
});

module.exports = indexRouter;
