var express = require("express");
var router = express.Router();
const providerController = require("../controllers/providers");

/* GET service providers list. */
router.get("/", providerController.list);

module.exports = router;
