const SubprocessModel = require('./../models/element.model')

module.exports.Create_subprocess = async (req, res) => {
    // console.log(req.body)
    let data = new SubprocessModel(req.body)
    try {
        let result = await data.save();
        res.status(200).send(result)
    } catch (error) {
        res.status(500).send(error)
    }
}

module.exports.Get_all_subprocesses = async (req, res) => {
    try {
        const data = await SubprocessModel.find().populate({
            path: 'process_id',
            populate: { path: 'period_id', select: 'year half' }
        });
        res.status(200).json({
            msg: "get all subprocesses from db",
            data: data
        })
    } catch (error) {
        res.status(500).send(error)
    }
}

module.exports.Get_subprocess_by_id = async (req, res) => {
    try {
        const id = req.params.id
        let result = await SubprocessModel.find({ _id: id }).populate({
            path: 'process_id',
            populate: { path: 'period_id', select: 'year half' }
        });
        res.status(200).json({
            msg: "get all subprocesses from db",
            data: data
        });
        res.status(201).send(result)
    } catch (error) {
        res.status(500).send(error)
    }
}

module.exports.Update_subprocess_by_id = async (req, res) => {
    try {
        const id = req.params.id
        let result = await SubprocessModel.findByIdAndUpdate(id, { subprocess_name: req.body.name }, { new: true });
        res.status(201).send(result)

    } catch (error) {
        res.status(500).send(error)
    }
}

module.exports.Delete_subprocess_by_id = async (req, res) => {
    try {
        const id = req.params.id
        let re = await SubprocessModel.deleteOne({ _id: id })
        res.status(201).send(re)

    } catch (error) {
        res.status(500).send(error)
    }
}
