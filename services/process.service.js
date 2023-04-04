const ProcessModel = require('./../models/process.model')


module.exports.Create_process = async (req, res) => {
    // console.log(req.body)
    let data = new ProcessModel(req.body)
    try {
        let result = await data.save();
        res.status(200).send(result)
    } catch (error) {
        res.status(500).send(error)
    }
}

module.exports.Get_processes = async (req, res) => {
    try {
        const data = await ProcessModel.find();
        res.status(200).json({
            msg: "get all elements from db",
            data: data
        })
    } catch (error) {
        res.status(500).send(error)
    }
}

module.exports.Get_process_by_id = async (req, res) => {
    try {
        const id = req.params.id
        let user = await ProcessModel.findById(id)
        res.status(201).send(user)

    } catch (error) {
        res.status(500).send(error)
    }
}

module.exports.Delete_process_by_id = async (req, res) => {
    try {
        const id = req.params.id
        let re = await ProcessModel.deleteOne({ _id: id })
        res.status(201).send(re)

    } catch (error) {
        res.status(500).send(error)
    }
}

module.exports.Update_process_by_id = async (req, res) => {
    try {
        const id = req.params.id
        let re = await ProcessModel.findByIdAndUpdate(id, req.body, { new: true });
        res.status(201).send(re)

    } catch (error) {
        res.status(500).send(error)
    }
}