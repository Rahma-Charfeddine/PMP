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
    },
    unit: {
      type: String,
      required: true,
      maxlength: 32,
    },

    goal: {
      type: Number,
      required: true,

    },
    achieved: {
      type: Number,
      required: true,
    },
    is_max: {
      type: Boolean,
      default: true
    },
  },
  {
    timestamps: true,
  }
);

indicatorSchema.index({ element_id: 1, indicator_name: 1 }, { unique: true });


const IndicatorModel = mongoose.model("indicator", indicatorSchema);
module.exports = IndicatorModel;