// Utils
const express = require("express");
const router = express.Router();
const config = require("config");
const { check, validationResult } = require("express-validator");
const auth = require("../../middleware/auth");

// Models
const Recipe = require("../../models/Recipe");
const Ingredient = require("../../models/Ingredient");

module.exports = router;
