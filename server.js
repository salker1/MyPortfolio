import config from "./config/config.js";
import express from "express";
import mongoose from "mongoose";

import contactRoutes from "./server/routes/contact.routes.js";
import educationRoutes from "./server/routes/education.routes.js";
import projectRoutes from "./server/routes/project.routes.js";
import userRoutes from "./server/routes/user.routes.js";
import authRoutes from "./server/routes/auth.routes.js";


const app = express();
app.use(express.json());

// MongoDB connection
mongoose.Promise = global.Promise;
mongoose
  .connect(config.mongoUri)
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch((err) => {
    throw new Error(`Unable to connect to database: ${config.mongoUri}`);
  });

// Default route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to My Portfolio application." });
});

// Routes
app.use("/api/contacts", contactRoutes);
app.use("/api/qualifications", educationRoutes);
app.use("/api/projects", projectRoutes);
app.use("/api/users", userRoutes);
app.use("/", authRoutes);



// Start the server
app.listen(config.port, (err) => {
  if (err) console.log(err);
  console.log(`Server started on port ${config.port}.`);
});
