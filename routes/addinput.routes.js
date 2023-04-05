const {Create_additional_input, Get_addtional_input_by_id, Get_all_elements, Delete_additional_input_by_id,Update_additional_input_by_id } = require('../services/addInput.services');

const router = require('express').Router();


router.post("/",Create_additional_input);

router.get("/:id",Get_addtional_input_by_id);
router.get("/", Get_all_elements );

router.delete("/:id",Delete_additional_input_by_id);
router.put("/:id", Update_additional_input_by_id);




module.exports = router;