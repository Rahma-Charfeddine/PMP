const CategoryRecipeModel = require('../models/category-recipe.model');
const IngredientRecipeModel = require('../models/ingredient-recipe.model');
const ReviewModel = require('../models/review.model');
const PeriodModel = require('./../models/period.model')


module.exports.Create_period = async (req, res) => {
    // console.log(req.body)
    let data = new PeriodModel(req.body)
    try {
        let result = await data.save();
        res.status(200).send(result)
    } catch (error) {
        res.status(500).send(error)
    }
}

module.exports.Get_all_periods = async (req, res) => {
    try {
        const data = await PeriodModel.find();
        res.status(200).json({
            msg: "get all periods from db",
            data: data
        })
    } catch (error) {
        res.status(500).send(error)
    }
}

module.exports.Get_period_by_id = async (req, res) => {
    try{
        const id = req.params.id
        let result = await PeriodModel.find({ _id: id })
        res.status(201).send(result)

    } catch (error) {
        res.status(500).send(error)
    }
}

module.exports.Delete_period_by_id = async (req, res) => {
    try {
        const id = req.params.id
        await PeriodModel.deleteOne({ _id: id })
        res.status(201).send()

    } catch (error) {
        res.status(500).send(error)
    }
}

module.exports.Update_period_by_id = async (req, res) => {
    try {
        const id = req.params.id
        let result = await PeriodModel.findByIdAndUpdate(id, req.body, { new: true });
        res.status(201).send(result)

    } catch (error) {
        res.status(500).send(error)
    }
}