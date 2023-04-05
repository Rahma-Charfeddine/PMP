const mongoose = require('mongoose');
const Schema = new mongoose.Schema(
    {
        process_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'process',
            required: true,
        },

        subprocess_name: {
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
const SubprocessModel = mongoose.model("subprocess", Schema);
module.exports = SubprocessModel;