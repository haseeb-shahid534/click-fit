const express = require("express");
const router = express.Router();
const upload = require("../middleware/upload");
const db = require("../config/db");

router.get("/all", (req, res) => {``
  const sql = "SELECT * FROM images";
  db.query(sql, (err, result) => {
    if (err) {
      return res.status(500).json({
        success: false,
        message: err.message,
        data: null,
      });
    }

    res.status(200).json({
      success: true,
      message: "Images fetched successfully",
      data: result,
    });
  });
});

router.post("/upload", upload.array("images"), (req, res) => {
  if (!req.files || req.files.length === 0) {
    return res.status(400).json({ message: "No files uploaded" });
  }

  const values = req.files.map((file) => [`/uploaded-images/${file.filename}`]);

  const sql = "INSERT INTO images (image_url) VALUES ?";
  db.query(sql, [values], (err, result) => {
    if (err) {
      return res
        .status(500)
        .json({ success: false, message: err.message, data: null });
    }

    res.status(200).json({
      success: true,
      message: "Images uploaded successfully",
      data: values.map((v) => v[0]),
    });
  });
});

module.exports = router;
