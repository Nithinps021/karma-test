const express = require("express");
const seql = require("./src/database/database");

const app = express();
app.use(express.json())

// route imports
const authorRoute=require('./src/routers/authorRoute')
const reviewRoute=require('./src/routers/reviewRoute')
const bookRoute=require('./src/routers/bookRoute')


// routes
// http://localhost:8080
app.use('/author',authorRoute)
app.use('/book',bookRoute)
app.use('/review',reviewRoute)




seql.authenticate()
.then(()=>{
  console.log("Connection has been established successfully.");
})
.catch (error=>{
  console.error("Unable to connect to the database:", error);
}) 



// connecting to port
app.listen("8080", () => {
  console.log("server connected");
});
