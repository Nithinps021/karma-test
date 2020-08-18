const express = require("express");
const seql = require("./src/database/database");
const { request } = require("express");

const app = express();

app.use(express.json())
const authorRoute=require('./src/routers/authorRoute')

app.use('/author',authorRoute)

try {
  seql.authenticate();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}

app.listen("8080", () => {
  console.log("server connected");
});
