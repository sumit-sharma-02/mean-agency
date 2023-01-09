const mongoose = require("mongoose");
const { providerSchema } = require("../schemas/provider.schemas");
const { companySchema } = require("../schemas/provider.schemas");

// Create the provider model
const Provider = mongoose.model("Provider", providerSchema);

module.exports = { Provider };
