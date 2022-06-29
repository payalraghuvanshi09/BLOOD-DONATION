var express = require("express");
var router = express.Router();

router.get("/", (req, res, next) => {
  // console.log("res=====>", res);
  // console.log("res=====>", res.data);
  res.render("index", { title: "Express", data: res.data });
});

module.exports = router;
