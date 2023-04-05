const { Create_subprocess,
    Get_subprocess_by_id,
    Get_all_subprocesses,
    Delete_subprocess_by_id,
    Update_subprocess_by_id } = require('../services/subprocess.service');

const router = require('express').Router();


router.post("/", Create_subprocess);

router.get("/:id", Get_subprocess_by_id);
router.get("/", Get_all_subprocesses);

router.delete("/:id", Delete_subprocess_by_id);
router.put("/:id", Update_subprocess_by_id);




module.exports = router;