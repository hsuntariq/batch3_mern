const express = require("express");
const errorHandler = require("./middlewares/errorMiddleware");
const connectDB = require("./config/connect");
const app = express();
require("dotenv").config();
require("colors");
const port = process.env.PORT;
const cors = require("cors");

app.use(cors());

connectDB();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api/goals", require("./routes/goalRoutes"));
app.use("/api/user", require("./routes/userRoutes"));
app.use(errorHandler);
app.listen(port, () => console.log(`server started on port:${port.cyan}`));
