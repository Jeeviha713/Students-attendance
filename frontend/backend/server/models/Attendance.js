import mongoose from "mongoose";

const attendanceSchema = new mongoose.Schema({

 studentId:{
  type:mongoose.Schema.Types.ObjectId,
  ref:"Student"
 },

 status:String,

 date:{
  type:Date,
  default:Date.now
 }

});

export default mongoose.model("Attendance",attendanceSchema);