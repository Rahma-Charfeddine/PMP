const {Create_evaluation, Get_evaluation_by_id, Get_all_evaluations , Delete_evaluation_by_id ,Update_Evaluation_by_id  } = require('../services/evaluation.services');

const router = require('express').Router();


router.post("/",Create_evaluation);

router.get("/:id",Get_evaluation_by_id);
router.get("/",Get_all_evaluations );

router.delete("/:id",Delete_evaluation_by_id );
router.put("/:id", Update_Evaluation_by_id );




module.exports = router;