var providers = require("../models/providers.models");
const Provider = require("../db/db");
const { ObjectId } = require("mongodb");

// UTIL Functions

// Check if list is empty
function isEmptyList(obj) {
  return !obj || obj.length == 0 || Object.keys(obj).length == 0;
}

// Handle error
function handleError(res, error) {
  res.status(200);
  res.send("Something went wrong. \n" + error);
}

// CRUD - Create (POST), Read (GET), Update (PUT), Delete (DELETE)

// POST
// URI: /api/providers
module.exports.create = function (req, res) {
  // Create new provider object
  try {
    var provider = req.body;
    Provider.create(provider)
      .then((result) => {
        res.status(201);
        res.send(result);
      })
      .catch((error) => handleError(res, error));
  } catch (error) {
    handleError(res, error);
  }
};

// GET
// URI: /api/providers
module.exports.readAll = function (req, res) {
  try {
    Provider.find()
      .then((result) => {
        if (isEmptyList(result)) {
          res.status(404);
          res.send("List is empty. Nothing to read.");
        }
        res.status(200);
        res.send(result);
      })
      .catch((error) => handleError(res, error));
  } catch (error) {
    handleError(res, error);
  }
};

// GET
// URI: /api/providers/123
module.exports.readOne = function (req, res) {
  try {
    let id = req.params.id;
    Provider.find({ id: id })
      .then((result) => {
        if (isEmptyList(result)) {
          res.status(404);
          res.send("List is empty. Nothing to read.");
        }
        res.status(200);
        res.send(result);
      })
      .catch((error) => handleError(res, error));
  } catch (error) {
    handleError(res, error);
  }
};

// PUT
// URI: /api/providers/123
module.exports.update = function (req, res) {
  try {
    let id = req.params.id;
    let provider = req.body;
    Provider.findOneAndUpdate({ id: id }, provider, { new: true })
      .then((result) => {
        if (isEmptyList(result)) {
          res.status(404);
          res.send("List is empty. Nothing to update.");
        }

        res.status(200);
        res.send(result);
      })
      .catch((error) => handleError(res, error));
  } catch (error) {
    handleError(res, error);
  }
};

// DELETE
// URI: /api/providers/123
module.exports.deleteOne = function (req, res) {
  try {
    let id = req.params.id;
    Provider.findOneAndDelete({ id: id })
      .then((result) => {
        if (isEmptyList(result)) {
          res.status(400);
          res.send("List is empty. Nothing to Delete");
        }
        res.status(200); // rest.status(404)
        res.send(result);
      })
      .catch((error) => handleError(res, error));
  } catch (error) {
    handleError(res, error);
  }
};

// DELETE
// URI: /api/providers
module.exports.deleteAll = function (req, res) {
  try {
    Provider.deleteMany({})
      .then((result) => {
        if (isEmptyList(result)) {
          res.status(404);
          res.send("List is empty. Nothing to Delete");
        }
        res.status(200);
        res.send("All providers deleted");
      })
      .catch((error) => handleError(res, error));
  } catch (error) {
    handleError(res, error);
  }
};
