const db = require("../db/queries.js");

const getMessages = async (req, res) => {
  const messages = await db.getAllMessages();
  res.render("index", { title: "All messages", messages: messages }); // This should definitely be cached at some point so we don't query the DB 60 million times
};

const getNewMessage = (req, res) => {
  res.render("new");
};

const getIDMessage = async (req, res) => {
  const id = req.params.id;
  const message = await db.getIDPost(id);
  res.render("message", { message: message });
};

const postNewMessage = async (req, res) => {
  const text = req.body.message;
  const user = req.body.name;
  const message = { name: user, text: text, added: new Date() };
  await db.createNewPost(message);
  res.redirect("/");
};

module.exports = { getMessages, getNewMessage, postNewMessage, getIDMessage };
