const mongoose = require('mongoose');


const addInputSchema = new mongoose.Schema(
  {
    MEval_id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    addInput_content: {
        type: String,
        required: true,
        minlength: 8,
        maxlength: 150,
      },
   
   
  },
  {
    timestamps: true,
  }
);




const AddInputModel = mongoose.model("addInput", addInputSchema);

module.exports = AddInputModel;