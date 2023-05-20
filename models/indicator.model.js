const mongoose = require('mongoose');
const indicatorSchema = new mongoose.Schema(
  {
    element_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'element',
      required: true,
    },
    indicator_name: {
      type: String,
      required: true,
      minlength: 2,
      maxlength: 50,
    },
    unit: {
      type: String,
      required: true,
      minlength: 2,
      maxlength: 32,
    },

    goal: {
      type: Number, // 
      required: true,

    },
    achieved: {
      type: Number, // 
      required: true,
    },

  },
  {
    timestamps: true,
  }
);

const IndicatorModel = mongoose.model("indicator", indicatorSchema);
module.exports = IndicatorModel;