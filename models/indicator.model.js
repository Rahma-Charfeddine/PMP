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
      default:true
    },
  },
  {
    timestamps: true,
  }
);

const IndicatorModel = mongoose.model("indicator", indicatorSchema);
module.exports = IndicatorModel;

/*  this code defines a Mongoose schema for an "indicator" collection in MongoDB, 
with fields such as 
element ID, indicator name, unit, goal, and achieved values. 
It also creates a Mongoose model based on the schema and exports it for use in other parts of the application.*/

/*The indicatorSchema is defined using mongoose.Schema.
 This schema defines the structure and validation rules for the Indicator model.*/