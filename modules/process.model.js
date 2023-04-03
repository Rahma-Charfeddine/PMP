const mongoose = require('mongoose');
const Schema = new mongoose.Schema(
    {      
        period_id: {
            type: mongoose.Schema.Types.ObjectId,
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
    }
);


const ProcessModel = mongoose.model("process", Schema);

module.exports = ProcessModel;