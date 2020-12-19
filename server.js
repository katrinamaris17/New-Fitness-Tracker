require("dotenv").config()
const mongoose = require("mongoose");
const express = require("express");

const PORT = process.env.PORT || 3000;

const app = express()

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  });

  app.listen(PORT, () => {
      console.log(`App using port ${PORT}!`);
  });