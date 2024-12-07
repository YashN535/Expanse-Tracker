const mongoose = require("mongoose");

const expanseSchema = new mongoose.Schema({
  description: { type: String, required: true },
  category: { type: String, required: true },
  amount: { type: Number, required: true },
  date: { type: Date, default: Date.now },
});

const Expanse = mongoose.model("Expanse", expanseSchema);
module.exports = Expanse;
