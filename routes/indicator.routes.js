const { Create_indicator,
    Get_all_indicators,
    Get_all_indicators_by_id_element,
    Delete_indicator_by_id,
    Update_indicator_by_id,
    Get_indicator_by_id } = require('../services/indicator.service');

const router = require('express').Router();


router.post("/", Create_indicator);
router.get("/", Get_all_indicators);
router.get("/:id", Get_indicator_by_id);
router.get("/getallbyidelement/:idelement", Get_all_indicators_by_id_element);
router.delete("/:id", Delete_indicator_by_id);
router.put("/:id", Update_indicator_by_id);



module.exports = router;