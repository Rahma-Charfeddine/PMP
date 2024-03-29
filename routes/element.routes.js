const {
    Create_element,
    Get_element_by_id,
    Get_all_elements,
    Get_all_elements_by_id_subprocess,
    Delete_element_by_id,
    Update_element_by_id } = require('../services/element.service');

const router = require('express').Router();

router.post("/", Create_element);
router.get("/:id", Get_element_by_id);
router.get("/", Get_all_elements);
router.get("/getallbyidsub/:idsub", Get_all_elements_by_id_subprocess);
router.delete("/:id", Delete_element_by_id);
router.put("/:id", Update_element_by_id);


module.exports = router;