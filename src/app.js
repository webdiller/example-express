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
app.use("/api/v1/example", exampleRoute);

/** Старт сервака */
(()=>{
  if (process.env.NODE_ENV === "development") {
    app.listen(process.env.DEVELOPMENT_SITE_PORT, async () => {
      console.log(`Listening development listening at http://localhost:${process.env.DEVELOPMENT_SITE_PORT}`);
    });
  }

  if (process.env.NODE_ENV === "production") {
    app.listen(process.env.PRODUCTION_SITE_PORT, async () => {
      console.log(`Listening production at http://localhost:${process.env.PRODUCTION_SITE_PORT}`);
    });
  }
})()