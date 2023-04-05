const router = require('express').Router();
const { Create_additional_input,
    Get_addtional_input_by_id,
    Get_all_additional_inputs,
    Delete_additional_input_by_id,
    Update_additional_input_by_id } = require('../services/addInput.service');

router.post("/", Create_additional_input);
router.get("/:id", Get_addtional_input_by_id);
router.get("/", Get_all_additional_inputs);
router.delete("/:id", Delete_additional_input_by_id);
router.put("/:id", Update_additional_input_by_id);




module.exports = router;