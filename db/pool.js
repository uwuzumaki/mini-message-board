const { Pool } = require("pg");
require("dotenv").config();

module.exports = new Pool({
  host: "localhost",
  user: `${process.env.USER}`,
  database: "mini_message_board",
  password: `${process.env.PASSWORD}`,
  port: 5432, // The default port
});
