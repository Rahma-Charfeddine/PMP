const InputModel = require('./../models/input.model')

module.exports.Create_input = async (req, res) => {
    // console.log(req.body)
    let data = new InputModel(req.body)
    try {
        let result = await data.save();
        res.status(200).send(result)
    } catch (error) {
        res.status(500).send(error)
    }
}

module.exports.Get_all_inputs = async (req, res) => {
    try {
        const data = await InputModel.find();
        res.status(200).json({
            msg: "get all inputs from db",
            data: data
        })
    } catch (error) {
        res.status(500).send(error)
    }
}

module.exports.Get_input_by_id = async (req, res) => {
    try {
        const id = req.params.id
        let result = await InputModel.find({ _id: id })
        res.status(201).send(result)
    } catch (error) {
        res.status(500).send(error)
    }
}

module.exports.Update_input_by_id = async (req, res) => {
    try {
        const id = req.params.id
        let result = await InputModel.findByIdAndUpdate(id, { input_name: req.body.name }, { new: true });
        res.status(201).send(result)

    } catch (error) {
        res.status(500).send(error)
    }
}

module.exports.Delete_input_by_id = async (req, res) => {
    try {
        const id = req.params.id
        let re = await InputModel.deleteOne({ _id: id })
        res.status(201).send(re)

    } catch (error) {
        res.status(500).send(error)
    }
}
