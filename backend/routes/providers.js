var express = require("express");
var router = express.Router();
const providerController = require("../controllers/providers");

/* GET service providers list page. */
router.get("/", providerController.list);
/* GET service provider details page. */
router.get("/details/:id", providerController.details);
/* GET service provider edit page. */
router.get("/edit/:id", providerController.edit);
/* POST service provider update page. */
router.post("/update/:id", providerController.update);
/* GET service provider add page. */
router.get("/add-provider", providerController.addform);
/* POST add new service provider page. */
router.post("/add", providerController.add);
/* GET service provider delete page. */
router.get("/delete/:id", providerController.delete);

module.exports = router;
