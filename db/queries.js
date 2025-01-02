const pool = require("./pool");

const getAllMessages = async () => {
  const { rows } = await pool.query("SELECT * FROM messages");
  return rows;
};

const getIDPost = async (id) => {
  const {
    rows: [firstRow],
  } = await pool.query("SELECT * FROM messages WHERE id=$1", [id]);
  return firstRow;
};

const createNewPost = async (message) => {
  const q = {
    text: "INSERT INTO messages(name, text, added) VALUES($1,$2,$3)",
    values: [message.name, message.text, message.added],
  };
  await pool.query(q.text, q.values);
};

module.exports = {
  getAllMessages,
  createNewPost,
  getIDPost,
};
