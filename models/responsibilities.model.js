const mongoose = require('mongoose');
const ResponsibilitiesSchema = new mongoose.Schema(
  {
    element_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'element',
      required: true,
    },
    headquarters: {
      type: String,
      required: true,
      enum: ["M", "D"],
    },
    OE: {
      type: String,
      required: true,
      enum: ["M", "D"],
    },
    process_team: {
      type: String,
      required: true,
      enum: ["SO-L", "SO-QS", "SO-SI", "SO-LOG", "SO-PN AN", "SO-PRO", "SO-RH", "SO-IT", "purchasing"],
    }
  },
);
const ResponsibilitiesModel = mongoose.model("responsiblities", ResponsibilitiesSchema);
module.exports = ResponsibilitiesModel;