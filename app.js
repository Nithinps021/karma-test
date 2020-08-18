const express = require("express");
const seql = require("./src/database/database");

const app = express();



try {
  seql.authenticate();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}

app.listen("8080", () => {
  console.log("server connected");
});
