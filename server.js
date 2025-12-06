<<<<<<< HEAD
import dotenv from "dotenv";
dotenv.config();

import config from "./config/config.js";
import express from "express";
import mongoose from "mongoose";
import authRoutes from "./server/routes/auth.routes.js";
=======
import config from "./config/config.js";
import express from "express";
import mongoose from "mongoose";

>>>>>>> 9cf9d00149c515458898503a1d1880d175b54de3
import contactRoutes from "./server/routes/contact.routes.js";
import educationRoutes from "./server/routes/education.routes.js";
import projectRoutes from "./server/routes/project.routes.js";
import userRoutes from "./server/routes/user.routes.js";
<<<<<<< HEAD
=======
import authRoutes from "./server/routes/auth.routes.js";

>>>>>>> 9cf9d00149c515458898503a1d1880d175b54de3

const app = express();
app.use(express.json());

// MongoDB connection
mongoose.Promise = global.Promise;
mongoose
  .connect(config.mongoUri)
<<<<<<< HEAD
  .then(() => console.log("Connected to the database!"))
  .catch((err) => {
    console.error("Unable to connect to database:", err);
=======
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch((err) => {
    throw new Error(`Unable to connect to database: ${config.mongoUri}`);
>>>>>>> 9cf9d00149c515458898503a1d1880d175b54de3
  });

// Default route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to My Portfolio application." });
});

// Routes
<<<<<<< HEAD
app.use("/auth", authRoutes);
=======
>>>>>>> 9cf9d00149c515458898503a1d1880d175b54de3
app.use("/api/contacts", contactRoutes);
app.use("/api/qualifications", educationRoutes);
app.use("/api/projects", projectRoutes);
app.use("/api/users", userRoutes);
<<<<<<< HEAD
=======
app.use("/", authRoutes);


>>>>>>> 9cf9d00149c515458898503a1d1880d175b54de3

// Start the server
app.listen(config.port, (err) => {
  if (err) console.log(err);
  console.log(`Server started on port ${config.port}.`);
});
