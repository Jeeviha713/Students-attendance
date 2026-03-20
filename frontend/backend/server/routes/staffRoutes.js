import express from "express";
import Staff from "../models/Staff.js";

const router = express.Router();

router.get("/all", async (req, res) => {
  const staff = await Staff.find();
  res.json(staff);
});

router.post("/add", async (req, res) => {
  const staff = new Staff(req.body);
  await staff.save();
  res.send("Staff Added");
});

export default router;