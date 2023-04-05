const { Create_period , Get_period_by_id, Get_all_periods, Delete_period_by_id ,Update_period_by_id} = require('../services/period.service');

const router = require('express').Router();


 router.post("/", Create_period);
 router.get(":id", Get_period_by_id);
 router.get("/", Get_all_periods);
 router.delete("/:id", Delete_period_by_id);
 router.put("/:id", Update_period_by_id);




module.exports = router;