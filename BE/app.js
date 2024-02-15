const express = require("express");

// require("dotenv").config();

const mongoose = require("mongoose");
const cors = require("cors");

const cookieParser = require("cookie-parser");

const app = express();

const PORT = process.env.PORT || 5000;

const eventRoute = require("./routes/event");
// const userRoute = require("./routes/users");
// const hotelsRoute = require("./routes/hotels");
// const roomsRoute = require("./routes/rooms");
// const transactionRoute = require("./routes/transactions");

//MIDDLEWARES
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

// //routes
app.use("/event", eventRoute);

app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong!";
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});

//connect mongoose
const connect = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://dinh:TxsmI8vQwxFLql04@dinh.ieuqqyx.mongodb.net/calendar"
    );
    console.log("Connected to mongoDB");
  } catch (err) {
    console.log(err);
  }
};
app.listen(PORT, () => {
  connect();
  console.log(`Server is running PORT ${PORT}`);
});
