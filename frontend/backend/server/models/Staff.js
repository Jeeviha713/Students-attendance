import mongoose from "mongoose";

const staffSchema = new mongoose.Schema({
  name: {
    type: String
  },
  staffId: {
    type: Number
  },
  department: {
    type: String
  }
});

export default mongoose.model("Staff", staffSchema);