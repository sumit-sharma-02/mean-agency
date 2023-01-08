var express = require("express");
var router = express.Router();
const providerController = require("../controllers/providers");

/* GET service providers list page. */
router.get("/", providerController.list);
/* GET service providers details page. */
router.get("/details/:id", providerController.details);

module.exports = router;
