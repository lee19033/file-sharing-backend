const express = require("express");

const router = express.Router();
const fileUpload = require("../middleware/file-upload");
const fileController = require("../controller/controler");

router.put("/v1/files", fileUpload.single("image"), fileController.upload);

router.get("/v1/files/:url", fileController.download);

module.exports = router;
