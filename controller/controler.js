const filePool = require("../model/filesPool");
const fs = require("fs");

const upload = async (req, res) => {
  filePool.addFile(req.file);
  const imagePath = req.file.path;

  setTimeout(() => {
    console.log(`delete after ${req.headers["x-file-retension"]}`);
    filePool.deleteFile(req.file.filename);
    console.log(`files count:${filePool.size()}`);
    fs.unlink(imagePath, (err) => {
      console.log(err);
    });
    req.file.fileName;
  }, req.headers["x-file-retension"]);

  try {
    if (!req.file) {
      return res.json({
        status: "false",
        message: "no file",
      });
    } else {
      const fileName = req.file.filename;
      return res.json({
        status: "true",
        message: "file is upload",
        name: "http://localhost:5000/files/" + fileName,
      });
    }
  } catch (err) {
    res.json({ error: err });
  }
};

const download = (req, res) => {
  const fileName = req.params.name;
  res.download(__dirname + fileName, fileName, (err) => {
    if (err) {
      res.status(500).send({
        message: "Could not download the file. " + err,
      });
    }
  });
};

module.exports = {
  upload,
  download,
};
