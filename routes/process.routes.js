const {Create_process, Get_process_by_id, Get_all_processes, Delete_process_by_id,Update_process_by_id } = require('../services/process.services');

const router = require('express').Router();


router.post("/",Create_process);

router.get("/:id",Get_process_by_id);
router.get("/", Get_all_processes );

router.delete("/:id",Delete_process_by_id);
router.put("/:id", Update_process_by_id);




module.exports = router;