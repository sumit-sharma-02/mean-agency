const providers = require("../models/providers");

// providers controller
module.exports.list = function (req, res) {
  res.render("providers/providers-list", {
    title: "Service Providers",
    providers: providers,
  });
};

module.exports.details = function (req, res) {
  let id = req.params.id;
  let provider = providers.find((provider) => provider.id == id);

  res.render("providers/providers-details", {
    id: id,
    title: "Service Provider Details",
    company: provider.company,
  });
};
