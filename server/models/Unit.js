const mongoose = require("mongoose");

const UnitSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    points: { type: Number, required: true },
    allowedLegions: [{ type: mongoose.Schema.Types.ObjectId, ref: "Legion" }],
  },
  {
    timestamps: true, // adds createdAt and updatedAt
  }
);

module.exports = mongoose.model("Unit", UnitSchema);
