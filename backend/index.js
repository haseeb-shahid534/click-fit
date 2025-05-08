const express = require("express");
const cors = require("cors");
const app = express();
const userRoutes = require("./routes/user");
const imageRoutes = require("./routes/image");
const path = require("path");

app.use(cors());
app.use(express.json());
app.use(
  "/uploaded-images",
  express.static(path.join(__dirname, "uploaded-images"))
);

app.use("/users", userRoutes);
app.use("/images", imageRoutes);

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
