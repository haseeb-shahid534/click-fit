const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const db = require("../config/db");

router.post("/add", async (req, res) => {
  const { email, password, type } = req.body;

  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(password, saltRounds);

  if (!email || !password || !type) {
    return res
      .status(400)
      .json({ error: "All fields are required (email, password, type)." });
  }

  const query = "CALL addUser(?, ?, ?, ?)";
  const active = 1;

  db.query(query, [email, hashedPassword, type, active], (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }

    const user = results[0]?.[0];
    res.status(201).json({
      user: {
        id: user ? user.ID : null,
        email,
        type,
        active,
      },
    });
  });
});

module.exports = router;
