var express = require("express");
var router = express.Router();
const mainController = require("../controllers/main");

/* GET home page. */
router.get("/", mainController.home);
/* GET about page. */
router.get("/about", mainController.about);
/* GET contact page. */
router.get("/contact", mainController.contact);
/* GET login page. */
router.get("/login", mainController.login);
/* GET register page. */
router.get("/register", mainController.register);
/* GET forgot-password page. */
router.get("/forgot-password", mainController.forgotpassword);

module.exports = router;
