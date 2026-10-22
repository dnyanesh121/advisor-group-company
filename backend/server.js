require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const Contact = require("./models/contact");

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
.then(() => {
  console.log("MongoDB Connected");
})
.catch((err) => {
  console.log(err);
});

app.post("/api/contact", async (req, res) => {
  try {

    console.log("DATA RECEIVED:", req.body);

    const contact = await Contact.create(req.body);

    res.status(201).json({
      success: true,
      data: contact,
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

app.listen(5000, () => {
  console.log(
    "Server Running On Port 5000"
  );
});

app.get("/api/contact", async (req, res) => {
  try {
    const leads = await Contact.find()
      .sort({ createdAt: -1 });

    res.json(leads);

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});