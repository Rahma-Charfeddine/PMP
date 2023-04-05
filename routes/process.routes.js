const { Create_process,
    Get_process_by_id,
    Get_processes,
    Delete_process_by_id,
    Update_process_by_id } = require('../services/process.service');

const router = require('express').Router();


router.post("/", Create_process);
router.get("/", Get_processes);
router.get("/:id", Get_process_by_id);
router.delete("/:id", Delete_process_by_id);
router.put("/:id", Update_process_by_id);




module.exports = router;