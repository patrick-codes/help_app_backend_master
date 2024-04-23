const express = require("express");
const appRouter = require("./routes/applicationRoutes");
const { dbConn } = require("./db_config/dbConnection");
const dotenv = require("dotenv").config();

//calling database connection
dbConn();

const app = express();

app.use(express.json());
app.use("/api/events", appRouter);

//const port = process.env.PORT || "5000";
const port = "3000";
app.listen(
  port,
  console.log(`Help app server running on port ${port}`)
);
