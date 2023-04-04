const AddInputModel = require('./../models/addInput.model')

module.exports.Create_additional_input= async (req, res) => {
    // console.log(req.body)
    let data = new AddInputModel(req.body)
    try {
        let result = await data.save();
        res.status(200).send(result)
    } catch (error) {
        res.status(500).send(error)
    }
}

module.exports.Get_all_additional_inputs = async (req, res) => {
    try {
        const data = await AddInputModel.find();
        res.status(200).json({
            msg: "get all additional inputs from db",
            data: data
        })
    } catch (error) {
        res.status(500).send(error)
    }
}

module.exports.Get_addtional_input_by_id = async (req, res) => {
    try {
        const id = req.params.id
        let result = await AddInputModel.find({ _id: id })
        res.status(201).send(result)
    } catch (error) {
        res.status(500).send(error)
    }
}

module.exports.Update_additional_input_by_id = async (req, res) => {
    try {
        const id = req.params.id
        let result = await AddInputModel.findByIdAndUpdate(id, {addInput_content : req.body.name }, { new: true });
        res.status(201).send(result)

    } catch (error) {
        res.status(500).send(error)
    }
}

module.exports.Delete_additional_input_by_id = async (req, res) => {
    try {
        const id = req.params.id
        let re = await AddInputModel.deleteOne({ _id: id })
        res.status(201).send(re)

    } catch (error) {
        res.status(500).send(error)
    }
}
