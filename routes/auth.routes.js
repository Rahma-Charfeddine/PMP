const { login, logout, checkuser } = require('../services/auth.service');

const router = require('express').Router();


router.post("/login", login);
router.post("/logout", logout);
router.post("/checkme", checkuser);




module.exports = router;