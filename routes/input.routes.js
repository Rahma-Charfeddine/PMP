const {Create_input, Get_input_by_id, Get_all_inputs, Delete_input_by_id,Update_input_by_id } = require('../services/input.services');

const router = require('express').Router();


router.post("/",Create_input);

router.get("/:id",Get_input_by_id);
router.get("/", Get_all_inputs );

router.delete("/:id",Delete_input_by_id);
router.put("/:id", Update_input_by_id);




module.exports = router;