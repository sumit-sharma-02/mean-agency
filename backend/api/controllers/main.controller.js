var providers = require("../models/providers.models");

// CRUD - Create (POST), Read (GET), Update (PUT), Delete (DELETE)

// POST
// URI: /api/providers
module.exports.create = function (req, res) {
  let min = 100000;
  let max = 999999;
  let id = Math.floor(Math.random() * (max - min) + min);

  // Create new provider object
  let provider = {
    id: id,
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    position: req.body.position,
    company: {
      company_name: req.body.company.company_name,
      address: req.body.company.address,
      address2: req.body.company.address2,
      city: req.body.company.city,
      state: req.body.company.state,
      postal_code: req.body.company.postal_code,
      phone: req.body.company.phone,
      email: req.body.company.email,
      description: req.body.company.description,
      tagline: req.body.company.tagline,
    },
  };
  providers.push(provider);
  res.status(200);
  res.send(provider);
};

// GET
// URI: /api/providers
module.exports.readAll = function (req, res) {
  res.status(200);
  res.send(providers);
};

// GET
// URI: /api/providers/123
module.exports.readOne = function (req, res) {
  let id = req.params.id;
  let provider = providers.find((provider) => provider.id == id);
  res.status(200);
  res.send(provider);
};

// PUT
// URI: /api/providers/123
module.exports.update = function (req, res) {
  let id = req.params.id;
  let provider = providers.find((provider) => provider.id == id);
  provider.firstname = req.body.firstname;
  provider.lastname = req.body.lastname;
  provider.position = req.body.position;
  provider.company.company_name = req.body.company.company_name;
  provider.company.address = req.body.company.address;
  provider.company.address2 = req.body.company.address2;
  provider.company.city = req.body.company.city;
  provider.company.state = req.body.company.state;
  provider.company.postal_code = req.body.company.postal_code;
  provider.company.phone = req.body.company.phone;
  provider.company.email = req.body.company.email;
  provider.company.description = req.body.company.description;
  provider.company.tagline = req.body.company.tagline;

  res.status(200);
  res.send(provider);
};

// DELETE
// URI: /api/providers/123
module.exports.deleteOne = function (req, res) {
  let id = req.params.id;
  let provider = providers.find((provider) => provider.id == id);
  let index = providers.indexOf(provider);
  providers.splice(index, 1);

  res.status(200); // rest.status(404)
  res.send(provider);
};

// DELETE
// URI: /api/providers
module.exports.deleteAll = function (req, res) {
  providers = [];
  res.status(200);
  res.send("All providers deleted");
};
