const {Create_indicator,
    Get_indicator_by_id ,
    Get_all_indicators,
    Delete_indicator_by_id,
    Update_indicator_by_id } = require('../services/indicator.service');

const router = require('express').Router();


router.post("/",Create_indicator);
router.get("/:id",Get_indicator_by_id );
router.get("/",Get_all_indicators );
router.delete("/:id",Delete_indicator_by_id);
router.put("/:id", Update_indicator_by_id);




module.exports = router;