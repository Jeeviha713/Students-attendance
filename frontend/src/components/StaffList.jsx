import React, { useEffect, useState } from "react";
import axios from "axios";

function StaffList() {

  const [staff, setStaff] = useState([]);

  useEffect(() => {
    fetchStaff();
  }, []);

  const fetchStaff = async () => {
    const res = await axios.get("http://localhost:5000/api/staff/all");
    setStaff(res.data);
  };

  return (
    <div>
      <h2>Staff List</h2>

      {staff.map((s) => (
        <div key={s._id}>
          {s.name} - {s.department}
        </div>
      ))}
    </div>
  );
}

export default StaffList;