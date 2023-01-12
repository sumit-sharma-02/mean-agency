const mongoose = require("mongoose");

// Define a Schema
const Schema = mongoose.Schema;

// Create a company schema (child or sub-document)
const companySchema = new Schema({
  company_name: { type: String, required: true },
  address: { type: String, required: true },
  address2: String,
  city: { type: String, required: true },
  state: { type: String, required: true },
  postal_code: { type: String, required: true, min: 6 },
  phone: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  description: String,
  tagline: String,
});

// Create a provider schema (top-level document)
const providerSchema = new Schema({
  id: { type: Number, required: true, unique: true },
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  position: String,
  company: companySchema,
});

module.exports = { providerSchema, companySchema };
