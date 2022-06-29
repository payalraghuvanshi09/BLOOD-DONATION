const router = require("express").Router();
const userController = require("./usercontroller");

router.get("/", userController.API);

module.exports = router;
