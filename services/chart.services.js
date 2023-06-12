const IndicatorModel = require("../models/indicator.model");
const PeriodModel = require("../models/period.model")
const ProcessModel = require("../models/process.model");
const SubprocessModel = require("../models/subprocess.model");



module.exports.get_All_indicators_by_process = async (req, res) => {
    const currentPeriod = await PeriodModel.findOne({ active: true });
    // console.log(currentPeriod)
    const processes = await ProcessModel.find({ period_id: currentPeriod });
    
}