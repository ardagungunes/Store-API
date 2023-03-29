require("dotenv").config();
require("express-async-errors");

const express = require("express");
const app = express();
const connectDB = require("./db/connect.js");
const router = require("./routes/products.js");

const notFoundMiddleware = require("./middleware/not-found.js");
const errorMiddleware = require("./middleware/error-handler.js");

//middleware
app.use(express.json());

//routes

app.get("/", (req, res) => {
  res.send("<h1>Store API</h1><a href='/api/v1/products'>Products Route</a>");
});

app.use("/api/v1/products", router);
//products route

app.use(notFoundMiddleware);
app.use(errorMiddleware);

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`Server is listening on port: ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
