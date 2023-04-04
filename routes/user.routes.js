const { Create_user } = require('../services/user.services');

const router = require('express').Router();


router.post("/",Create_user);
// router.get("/",Get_all_users);
// router.get("/:id",Get_user_by_id);
// router.delete("/:id",Delete_user_by_id);
// router.put("/:id",Update_user_by_id);




module.exports = router;