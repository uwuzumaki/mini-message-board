const db = require("../db/queries.js");

const getMessages = async (req, res) => {
  const messages = await db.getAllMessages();
  res.render("index", { title: "All messages", messages: messages });
};

const getNewMessage = (req, res) => {
  res.render("new");
};

const postNewMessage = async (req, res) => {
  const text = req.body.message;
  const user = req.body.name;
  const message = { name: user, text: text, added: new Date() };
  await db.createNewPost(message);
  res.redirect("/");
};

module.exports = { getMessages, getNewMessage, postNewMessage };
