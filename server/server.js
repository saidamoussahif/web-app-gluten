const express = require("express");
const dotenv = require("dotenv").config();
const db = require("./config/db");
const port = process.env.PORT || 9090;
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

const cors = require("cors");
const sharp = require("sharp");
const multer = require("multer");

db();
const app = express();

app.use(cors());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/products", require("./Routes/productRoutes"));
app.use("/api/users", require("./Routes/userRoutes"));
app.use("/api/categories", require("./Routes/categoryRoutes"));

const upload = multer({
  limits: {
    fileSize: 1000000,
  },
  fileFilter(req, file, cb) {
    if (!file.originalname.match(/.(jpg|jpeg|png)$/)) {
      return cb(new Error("Please upload a valid image file"));
    }
    cb(undefined, true);
  },
});

app.post("/upload", upload.single("image"), async (req, res) => {
  try {
    console.log(req.file);
    const imageName = `${Date.now()}-${req.file.originalname}`;
    await sharp(req.file.buffer)
      .resize({ width: 250, height: 250 })
      .png()
      .toFile(__dirname + `./images/${imageName}`);
    res.status(201).send("Image uploaded succesfully");
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
});

// const path = require("path");

// app.get("/getProductImage", (req, res) => {
//   const imageName = req.query.image;
//   const imagePath = path.join(__dirname, "uploads", imageName);
//   res.sendFile(imagePath);
// });

module.exports = app;

app.listen(port, () => {
  console.log(`server runing on localhost: ${port}`);
});
