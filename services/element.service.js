const ElementModel = require('./../models/element.model')

module.exports.Create_element = async (req, res) => {
    // console.log(req.body)
    let data = new ElementModel(req.body)
    try {
        let result = await data.save();
        res.status(200).send(result)
    } catch (error) {
        res.status(500).send(error)
    }
}

module.exports.Get_all_elements = async (req, res) => {
    try {
        const data = await ElementModel.find();
        res.status(200).json({
            msg: "get all elements from db",
            data: data
        })
    } catch (error) {
        res.status(500).send(error)
    }
}

module.exports.Get_element_by_id = async (req, res) => {
    try {
        const id = req.params.id
        let result = await ElementModel.find({ _id: id })
        res.status(201).send(result)
    } catch (error) {
        res.status(500).send(error)
    }
}

module.exports.Update_element_by_id = async (req, res) => {
    try {
        const id = req.params.id
        let result = await ElementModel.findByIdAndUpdate(id, { element_name: req.body.name }, { new: true });
        res.status(201).send(result)

    } catch (error) {
        res.status(500).send(error)
    }
}

module.exports.Delete_element_by_id = async (req, res) => {
    try {
        const id = req.params.id
        let re = await ElementModel.deleteOne({ _id: id })
        res.status(201).send(re)

    } catch (error) {
        res.status(500).send(error)
    }
}
