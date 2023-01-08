const providers = require("../models/providers");

// providers controller
module.exports.list = function (req, res) {
  res.render("providers/providers-list", { providers: providers });
};
