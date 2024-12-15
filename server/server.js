const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const router = require("./route/routes");

const PORT = process.env.PORT || 5000;
const app = express();

// Middleware
app.use(cors({
  origin: 'https://mernstacktodoapp12.netlify.app/',
  methods: ['GET', 'POST'],
}));
app.use(express.json());

// Mongoose Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected Successfully");
  })
  .catch((err) => {
    console.log("Error in connecting:", err);
  });

// Route breakpoint API
app.use('/api', router);

// Display response on localhost
app.get('/', (req, res) => {
  res.send("Hello World");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
