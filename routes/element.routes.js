const {
    Create_element,
    Get_element_by_id,
    Get_all_elements,
    Delete_element_by_id,
    Update_element_by_id } = require('../services/element.service');

const router = require('express').Router();


router.post("/", Create_element);

router.get("/:id", Get_element_by_id);
router.get("/", Get_all_elements);

router.delete("/:id", Delete_element_by_id);
router.put("/:id", Update_element_by_id);




module.exports = router;