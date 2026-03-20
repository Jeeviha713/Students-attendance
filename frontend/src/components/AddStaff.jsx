
import React, { useState } from "react";
import axios from "axios";

function AddStaff() {

  const [name, setName] = useState("");
  const [staffId, setStaffId] = useState("");
  const [department, setDepartment] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const staffData = {
      name: name,
      staffId: staffId,
      department: department
    };

    try {
      await axios.post("http://localhost:5000/api/staff/add", staffData);
      alert("Staff Added Successfully");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h2>Add Staff</h2>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          placeholder="Staff Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="number"
          placeholder="Staff ID"
          value={staffId}
          onChange={(e) => setStaffId(e.target.value)}
        />

        <input
          type="text"
          placeholder="Department"
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
        />

        <button type="submit">Add Staff</button>

      </form>
    </div>
  );
}

export default AddStaff;