const mongoose = require("mongoose");
const bodyparser = require("body-parser");
const express = require("express");
const app = express();
const cors = require("cors");
const expansesRoutes = require("./routes/expansesRoutes");

//Middleware

app.use(bodyparser.json());
app.use(cors());

//Connection to MongoDB

mongoose
  .connect("mongodb://localhost:27017/expanses-tracker")
  .then(() => {
    console.log("Database Connection Successful");
  })
  .catch((error) => {
    console.log("Database Connection Failed");
  });

//Routes

app.use("/api/expanses", expansesRoutes);

//Server Connection

app.listen(4000, () => {
  console.log("Server Listning at http://127.0.0.1:4000");
});
