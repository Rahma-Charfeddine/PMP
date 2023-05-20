const EvaluationModel = require('./../models/evaluation.model')

module.exports.Create_evaluation= async (req, res) => {
    // console.log(req.body)
    let data = new EvaluationModel(req.body)
    try {
        let result = await data.save();
        res.status(200).send(result)
    } catch (error) {
        res.status(500).send(error)
    }
}

module.exports.Get_all_evaluations = async (req, res) => {
    try {
        const data = await EvaluationModel.find();
        res.status(200).json({
            msg: "get all management evaluations from db",
            data: data
        })
    } catch (error) {
        res.status(500).send(error)
    }
}

module.exports.Get_evaluation_by_id = async (req, res) => {
    try {
        const id = req.params.id
        let user = await EvaluationModel.findById(id)
        res.status(201).send(user)

    } catch (error) {
        res.status(500).send(error)
    }
}

module.exports.Delete_evaluation_by_id = async (req, res) => {
    try {
        const id = req.params.id
        let re = await EvaluationModel.deleteOne({ _id: id })
        res.status(201).send(re)

    } catch (error) {
        res.status(500).send(error)
    }
}

module.exports.Update_Evaluation_by_id = async (req, res) => {
    try {
        const id = req.params.id
        let re = await EvaluationModel.findByIdAndUpdate(id, req.body, { new: true });
        res.status(201).send(re)

    } catch (error) {
        res.status(500).send(error)
    }
}
