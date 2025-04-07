const express = require("express");
const appRouter = require("./routes/applicationRoutes");
//const userRouter = require("./routes/usersRoutes");
const { dbConn } = require("./db_config/dbConnection");
const dotenv = require("dotenv").config();
const cors = require('cors');



//calling database connection
dbConn();

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/events", appRouter);
//app.use("/api/events/auth",userRouter);

//const port = process.env.PORT || "5000";
const port = "5000";
app.listen(
  port,
  console.log(`Help app server running on port ${port}`)
);
