const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const express = require("express");
const logger = require("morgan");
const app = express();
const PORT = process.env.PORT || 4000;
const errorHandler = require("./middleware/error");

// Connect db
const connectDB = require("./config/db");
connectDB();

// Middleware
app.use(express.json());
app.use(logger("tiny"));

// Routes
const authRouter = require("./routes/auth");
const privateRouter = require("./routes/private");

app.use("/api/auth", authRouter);
app.use("/api/private", privateRouter);

// Error Handler
app.use(errorHandler);

const server = app.listen(PORT, () => {
  console.log(`Server is up on http://localhost:${PORT}`);
});

process.on("unhandledRejection", (err, promise) => {
  console.log(`Logged Error: ${err}`);
  server.close(() => process.exit(1));
});
