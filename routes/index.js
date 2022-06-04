var express = require("express");
var router = express.Router();
var path = require("path");

router.get("/", function (req, res, next) {
  res.sendFile(path.join(__dirname, "../pages/react_home/index.html"));
});

router.get("/insta-clone", function (req, res, next) {
  res.sendFile(path.resolve(__dirname, "../pages/instagram_clone/index.html"));
});

router.get("/lawn-service", function (req, res, next) {
  res.sendFile(path.resolve(__dirname, "../pages/lawn_service/index.html"));
});

module.exports = router;
