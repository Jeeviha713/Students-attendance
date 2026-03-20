import express from "express";
import Attendance from "../models/Attendance.js";

const router = express.Router();

router.post("/mark", async (req,res)=>{

 const { studentId, status } = req.body;

 const attendance = new Attendance({
   studentId,
   status
 });

 await attendance.save();

 res.json({ message: "Attendance saved" });

});

export default router;