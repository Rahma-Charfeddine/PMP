const IndicatorModel = require('./../models/indicator.model')

module.exports.Update_indicator_by_id = async (req, res) => {
    try {
        const id = req.params.id
        const result = await IndicatorModel.findByIdAndUpdate(id, { indicator_name: req.body.name }, { new: true });
        res.status(201).send(result)

    } catch (error) {
        res.status(500).send(error)
    }
}

module.exports.Create_indicator = async (req, res) => {
    // console.log(req.body)
    let data = new IndiactorModel(req.body)
    try {
        let result = await data.save();
        res.status(200).send(result)
    } catch (error) {
        res.status(500).send(error)
    }
}

module.exports.Get_all_indicators_by_id_element = async (req, res) => {
    try {
        const data = await IndicatorModel.find({ element_id: req.params.idelement })
        res.status(200).json({
            msg: "get all indicators by id element:" + req.params.idelement,
            data: data
        })
    } catch (error) {
        res.status(500).send(error)
    }
}


module.exports.Get_all_indicators = async (req, res) => {
    try {
        const data = await IndicatorModel.find();
        res.status(200).json({
            msg: "get all indicators from db",
            data: data
        })
    } catch (error) {
        res.status(500).send(error)
    }
}

module.exports.Get_indicator_by_id = async (req, res) => {
    try {
        const id = req.params.id
        const result = await IndicatorModel.find({ _id: id })
        res.status(201).send(result)
    } catch (error) {
        res.status(500).send(error)
    }
}



module.exports.Delete_indicator_by_id = async (req, res) => {
    try {
        const id = req.params.id
        let re = await IndicatorModel.deleteOne({ _id: id })
        res.status(201).send(re)

    } catch (error) {
        res.status(500).send(error)
    }
}
