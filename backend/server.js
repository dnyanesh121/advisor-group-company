require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const Contact = require("./models/contact");
const sendSms = require("./sms");

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

    const { name, mobile, email, interest, subject, message } = req.body;

    if (!name || !/^[0-9]{10}$/.test(mobile || "")) {
      return res.status(400).json({
        success: false,
        message: "Name and valid 10-digit mobile number are required",
      });
    }

    const contact = await Contact.create({
      name, mobile, email, interest, subject, message,
    });

    // SMS fail ho jaye to bhi form submit successful maana jayega
    sendSms(
      mobile,
      `Hi ${name}, thank you for contacting First Advisors Insurance. Our team will get back to you shortly. For help call 1800-890-9195.`
    ).catch((err) => console.log(err.message));

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

app.get("/", (req, res) => {
  res.send("Backend Running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server Running On Port ${PORT}`);
});