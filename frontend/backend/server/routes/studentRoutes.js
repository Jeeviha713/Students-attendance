
import express from "express";
import Student from "../models/Student.js";

const router = express.Router();


// Add student
router.post("/add", async(req,res)=>{
 try{
  const student = new Student(req.body);
  await student.save();
  res.json(student);
 }catch(err){
  res.status(500).json({error:err.message});
 }
});


// Get students by department
router.get("/department/:dept", async(req,res)=>{
 try{
  const students = await Student.find({
   department:req.params.dept
  });
  res.json(students);
 }catch(err){
  res.status(500).json({error:err.message});
 }
});


// Filter students by dept + year + section
router.get("/filter/:dept/:year/:section", async(req,res)=>{
 try{

  const {dept,year,section} = req.params;

  const students = await Student.find({
   department:dept,
   year:year,
   section:section
  });

  res.json(students);

 }catch(err){
  res.status(500).json({error:err.message});
 }
});


// Delete student
router.delete("/delete/:id", async(req,res)=>{
 try{
  await Student.findByIdAndDelete(req.params.id);
  res.json({message:"Student deleted"});
 }catch(err){
  res.status(500).json({error:err.message});
 }
});

export default router;