var providers = require("../models/providers.models");

// UTIL Functions
// Check if list is empty
function isEmptyList(obj) {
  return !obj || obj.length == 0 || Object.keys(obj).length == 0;
}

// Check for existing provider
function existsProvider(id) {
  return providers.find((provider) => provider.id == id);
}

// Generate unique provider id
function getUniqueId() {
  let min = 100000;
  let max = 999999;
  do {
    var id = Math.floor(Math.random() * (max - min) + min);
  } while (existsProvider(id));

  return id;
}

// CRUD - Create (POST), Read (GET), Update (PUT), Delete (DELETE)

// POST
// URI: /api/providers
module.exports.create = function (req, res) {
  // Create new provider object
  if (isEmptyList(providers)) {
    providers = [];
  }

  var id = req.body.id;
  if (existsProvider(id)) {
    res.status(400);
    res.send("Duplicate ID not allowed.");
    id = getUniqueId(); // Get new ID
  }

  var provider = req.body;
  provider.id = id;

  providers.push(provider);
  res.status(200);
  res.send(provider);
};

// GET
// URI: /api/providers
module.exports.readAll = function (req, res) {
  if (isEmptyList(providers)) {
    res.status(404);
    res.send("List is empty");
  }
  res.status(200);
  res.send(providers);
};

// GET
// URI: /api/providers/123
module.exports.readOne = function (req, res) {
  if (isEmptyList(providers)) {
    res.status(404);
    res.send("List is empty");
  }
  let id = req.params.id;
  let provider = providers.find((provider) => provider.id == id);
  res.status(200);
  res.send(provider);
};

// PUT
// URI: /api/providers/123
module.exports.update = function (req, res) {
  if (isEmptyList(providers)) {
    res.status(404);
    res.send("List is empty. Cannot update.");
  }
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
  if (isEmptyList(providers)) {
    res.status(404);
    res.send("List is empty. Cannot Delete");
  }
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
  if (isEmptyList(providers)) {
    res.status(404);
    res.send("List is empty. Cannot Delete");
  }
  providers = [];
  res.status(200);
  res.send("All providers deleted");
};
