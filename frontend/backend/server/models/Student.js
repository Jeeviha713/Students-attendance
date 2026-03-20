
import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
 name:String,
 regno:String,
 department:String,
 year:String,
 section:String
});

export default mongoose.model("Student",studentSchema);