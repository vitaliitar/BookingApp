const express = require("express");

const { signUp, signIn } = require("../controllers/user");
// const UserContr = require('../controllers/user');

const router = express.Router();

// console.log(signUp)

router.post("/signup", signUp);
router.post("/signin", signIn);

module.exports = router;