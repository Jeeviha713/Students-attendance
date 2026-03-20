import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import reportRoutes from "./server/routes/reportRoutes.js";
import studentRoutes from "./server/routes/studentRoutes.js";
import staffRoutes from "./server/routes/staffRoutes.js";
import attendanceRoutes from "./server/routes/attendanceRoutes.js";


const app = express();

app.use(cors());
app.use(express.json());

mongoose
  .connect("mongodb://127.0.0.1:27017/attendance")
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

app.use("/api/students", studentRoutes);
app.use("/api/staff", staffRoutes);
app.use("/api", reportRoutes);
app.use("/api/attendance", attendanceRoutes);


app.get("/", (req, res) => {
  res.send("Server Running");
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});