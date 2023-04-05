const mongoose = require('mongoose');
const evaluationSchema = new mongoose.Schema(
  {
    period_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'period',
      required: true,
    },
    subject: {
      type: String,
      required: true,
      minlength: 8,
      maxlength: 150,
    },
    responsible: {
      type: String,
      required: true,
      minlength: 8,
      maxlength: 30,
    },
    deadline: {
      type: String,
      required: true,
      minlength: 8,
      maxlength: 15,
    },
    status: {
      type: Number,
      required: true,
      enum: [0, 25, 50, 75, 100],
    },
    effectCheck: {
      type: String,
      required: true,
      maxlength: 4,
    },

  },
  {
    timestamps: true,
  }
);
const EvaluationModel = mongoose.model("evaluation", evaluationSchema);
module.exports = EvaluationModel;