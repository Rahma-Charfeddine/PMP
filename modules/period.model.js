const mongoose = require('mongoose');


const periodSchema = new mongoose.Schema(
  {
    year: {
      type: Number, // 
      required: true,

    },
    half: {
        type: number,
        enum: [1, 2],
    },
    reference: {
        type: String,
        required: true,
        length: 10,
    },
  },
  {
    timestamps: true,
  }

);




const PeriodModel = mongoose.model("period", periodSchema);

module.exports = PeriodModel;