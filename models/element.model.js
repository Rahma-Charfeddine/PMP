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
const ElementModel = mongoose.model("element", elementSchema);
module.exports = ElementModel;