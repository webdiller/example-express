require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();

/* Routes */
const exampleRoute = require("./api/v1/routes/example.router");

/* Middleware */
app.use(cors());
app.use(express.static(path.resolve(__dirname, "static")));
app.use(express.json());

/* API */
app.use("/", (req, res) => res.send("Hello basic route"));
app.use("/api/v1/example", exampleRoute);

/** Старт сервака */
(() => {
  app.listen(5003, async () => {
    console.log(
      `Listening development listening at http://localhost:5003`
    );
  });
})();
