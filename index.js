const express = require("express");
const dotenv = require("dotenv");
const db = require("./db");
const cors=require("cors");

const app = express();
dotenv.config();

app.use(express.json());
app.use(cors());

const roleRouter = require("./routers/routes/role");
app.use( roleRouter);

// const registerRouter = require("./router/route/register");
// app.use("/", registerRouter);

// const logInRouter = require("./router/route/login");
// app.use("/", logInRouter);

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`server is running on ${port}`);
});