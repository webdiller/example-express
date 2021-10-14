const express = require("express");
const exampleController = require("../controllers/example.controller");
const router = express.Router();

router.get("/", exampleController.example);

module.exports = router;
