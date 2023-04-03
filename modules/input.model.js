const mongoose = require('mongoose');


const inputSchema = new mongoose.Schema(
  {
    MEval_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    },
    input_content: {
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




const InputModel = mongoose.model("input", inputSchema);

module.exports = InputModel;