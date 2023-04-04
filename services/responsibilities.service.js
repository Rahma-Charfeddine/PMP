ResponsibilitiesModel = require('./../models/responsibilities.model')


module.exports.Create_responsibility_set = async (req, res) => {
    // console.log(req.body)
    let data = new ResponsibilitiesModel(req.body)
    try {
        let result = await data.save();
        res.status(200).send(result)
    } catch (error) {
        res.status(500).send(error)
    }
}

module.exports.Get_responsibility_sets= async (req, res) => {
    try {
        const data = await ResponsibilitiesModel.find();
        res.status(200).json({
            msg: "get all responsibility sets from db",
            data: data
        })
    } catch (error) {
        res.status(500).send(error)
    }
}

module.exports.Get_responsibility_set_by_id = async (req, res) => {
    try {
        const id = req.params.id
        let user = await ResponsibilitiesModel.findById(id)
        res.status(201).send(user)

    } catch (error) {
        res.status(500).send(error)
    }
}

module.exports.Delete_responsibility_set_by_id = async (req, res) => {
    try {
        const id = req.params.id
        let re = await ResponsibilitiesModel.deleteOne({ _id: id })
        res.status(201).send(re)

    } catch (error) {
        res.status(500).send(error)
    }
}

module.exports.Update_responsibility_set_by_id = async (req, res) => {
    try {
        const id = req.params.id
        let re = await ResponsibilitiesModel.findByIdAndUpdate(id, req.body, { new: true });
        res.status(201).send(re)

    } catch (error) {
        res.status(500).send(error)
    }
}