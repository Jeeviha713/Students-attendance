import express from "express";
import Student from "../models/Student.js";
import Attendance from "../models/Attendance.js";

const router = express.Router();

router.get("/report/:dept/:year/:section", async (req, res) => {

  const { dept, year, section } = req.params;

  const students = await Student.find({
    department: dept,
    year: year,
    section: section
  });

  const result = [];

  for (let s of students) {

    const present = await Attendance.countDocuments({
      studentId: s._id,
      status: "Present"
    });

    const absent = await Attendance.countDocuments({
      studentId: s._id,
      status: "Absent"
    });

    result.push({
      name: s.name,
      regno: s.regno,
      dept: s.department,
      year: s.year,
      section: s.section,
      present,
      absent
    });

  }

  res.json(result);

});

export default router;