require("dotenv").config();
const express = require("express");
const app = express();
const path = require("path");
const userRouter = require("./user-route");
const pool = require("./config/database");
// const indexRouter = require("./views/index");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use("/", userRouter);

app.use(express.json());
if (pool) {
  console.log("Connection Success");
} else {
  console.log("Cant connect to db, Check ur db connection");
}

app.listen(process.env.APP_PORT, () => {
  console.log("Server is running at port 3306..", process.env.APP_PORT);
});
