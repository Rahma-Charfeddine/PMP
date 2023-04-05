const { Create_responsibility_set,
    Get_responsibility_set_by_id,
    Get_responsibility_sets,
    Delete_responsibility_set_by_id,
    Update_responsibility_set_by_id } = require('../services/responsibilities.service');

const router = require('express').Router();


router.post("/", Create_responsibility_set);

router.get("/:id", Get_responsibility_set_by_id);
router.get("/", Get_responsibility_sets);

router.delete("/:id", Delete_responsibility_set_by_id);
router.put("/:id", Update_responsibility_set_by_id);




module.exports = router;