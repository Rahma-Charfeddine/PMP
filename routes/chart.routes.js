const { get_All_indicators_by_process } = require('../services/chart.services');

const router = require('express').Router();

router.get("/indicatorsbyprocess", get_All_indicators_by_process);


module.exports = router;