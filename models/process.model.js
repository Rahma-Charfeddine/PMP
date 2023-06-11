const mongoose = require('mongoose');
const Schema = new mongoose.Schema(
    {
        period_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'period',
            required: true,
        },
        process_name: {
            type: String,
            required: true,
            minlength: 2,
            maxlength: 50,
        },
    },
    {
        timestamps: true,
        unique: true
    }
);

Schema.index({ period_id: 1, process_name: 1 }, { unique: true });

const ProcessModel = mongoose.model("process", Schema);
module.exports = ProcessModel;