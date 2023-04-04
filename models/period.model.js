const mongoose = require('mongoose');


const periodSchema = new mongoose.Schema(
  {
    year: {
      type: Number,
      required: true,

    },
    half: {
      type: Number,
      enum: [1, 2],
      required: true,
    },
    reference: {
      type: String,
      length: 10,
    },
  },
  {
    timestamps: true,
  }

);




const PeriodModel = mongoose.model("period", periodSchema);

module.exports = PeriodModel;