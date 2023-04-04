const { Create_period } = require('../services/period.service');

const router = require('express').Router();


router.post("/", Create_period);

// router.get(":id", Get_period_by_id);
// router.delete("/:id", Delete_period_by_id);
// router.put("/:id", Update_period_by_id);




module.exports = router;