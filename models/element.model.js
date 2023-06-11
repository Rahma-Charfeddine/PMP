const mongoose = require('mongoose');
const elementSchema = new mongoose.Schema(
    {
        subprocess_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'subprocess',
            required: true,
        },
        element_name: {
            type: String,
            required: true,
            minlength: 2,
            
        },
        description: {
            type: String,
            minlength: 0,
        }
    },
    {
        timestamps: true,
    }
);

elementSchema.index({ subprocess_id: 1, element_name: 1 }, { unique: true });

const ElementModel = mongoose.model("element", elementSchema);
module.exports = ElementModel;