import React,{useState,useEffect} from "react";
import axios from "axios";
import "../App.css";

function StaffDashboard(){

// SEARCH FILTER STATES
const [dept,setDept] = useState("");
const [year,setYear] = useState("");
const [section,setSection] = useState("");

const [students,setStudents] = useState([]);

// ADD STUDENT STATES
const [name,setName] = useState("");
const [regno,setRegno] = useState("");
const [department,setDepartment] = useState("");
const [studentYear,setStudentYear] = useState("");
const [studentSection,setStudentSection] = useState("");

// ATTENDANCE STATE
const [attendance,setAttendance] = useState({});

useEffect(()=>{
 fetchStudents();
},[]);


// FETCH STUDENTS
const fetchStudents = async ()=>{
 const res = await axios.get(
 `https://students-attendance-3h7f.onrender.com/api/students/filter/${dept}/${year}/${section}`
 );
 setStudents(res.data);
};


// SEARCH BUTTON
const searchStudents = async()=>{
 const res = await axios.get(
 `https://students-attendance-3h7f.onrender.com/api/students/filter/${dept}/${year}/${section}`
 );
 setStudents(res.data);
};


// ADD STUDENT
const addStudent = async ()=>{

 await axios.post("https://students-attendance-3h7f.onrender.com/api/students/add",{
  name,
  regno,
  department,
  year:studentYear,
  section:studentSection
 });

 setName("");
 setRegno("");

 fetchStudents();
};


// DELETE STUDENT
const deleteStudent = async(id)=>{

 if(window.confirm("Delete this student?")){

  await axios.delete(
  `https://students-attendance-3h7f.onrender.com/api/students/delete/${id}`
  );

  fetchStudents();
 }

};

const markAttendance = async (id,status)=>{

 setAttendance({
  ...attendance,
  [id]:status
 });

 await axios.post("https://students-attendance-3h7f.onrender.com/api/attendance/mark",{
   studentId:id,
   status:status
 });

};
return(

<div className="dashboard">

<h2>Staff Dashboard</h2>


{/* SEARCH FILTER */}
<div className="card">
<h3 style={{textAlign:"center"}}>Search Students</h3>

{/* <div style={{display:"flex",gap:"10px"}}> */}
<div style={{display:"flex",gap:"10px",justifyContent:"center"}}>

<select value={dept} onChange={(e)=>setDept(e.target.value)}>
<option value="" disabled hidden>Department</option>
<option value="CSE">CSE</option>
<option value="IT">IT</option>
<option value="ECE">ECE</option>
<option value="MECH">MECH</option>
</select>

<select value={year} onChange={(e)=>setYear(e.target.value)}>
<option value=""disabled hidden>Year</option>
<option value="1">1st Year</option>
<option value="2">2nd Year</option>
<option value="3">3rd Year</option>
<option value="4">4th Year</option>
</select>

<select value={section} onChange={(e)=>setSection(e.target.value)}>
<option value=""disabled hidden>Section</option>
<option value="A">A Section</option>
<option value="B">B Section</option>
<option value="C">C Section</option>
</select>

<button onClick={searchStudents}>Search</button>

</div>

</div>
<br/>


{/* ADD STUDENT */}

<div className="card">
<h3>Add Student</h3>

<div style={{display:"flex",gap:"10px"}}>

<input
value={name}
placeholder="Student Name"
onChange={(e)=>setName(e.target.value)}
/>

<input
value={regno}
placeholder="Reg No"
onChange={(e)=>setRegno(e.target.value)}
/>

<select value={department} onChange={(e)=>setDepartment(e.target.value)}>
<option value="" disabled hidden>Department</option>
<option value="CSE">CSE</option>
<option value="IT">IT</option>
<option value="ECE">ECE</option>
<option value="MECH">MECH</option>
</select>

<select value={studentYear} onChange={(e)=>setStudentYear(e.target.value)}>
<option value=""disabled hidden>Year</option>
<option value="1">1st Year</option>
<option value="2">2nd Year</option>
<option value="3">3rd Year</option>
<option value="4">4th Year</option>
</select>

<select value={studentSection} onChange={(e)=>setStudentSection(e.target.value)}>
    <option value=""disabled hidden>Section</option>
<option value="A">A Section</option>
<option value="B">B Section</option>
<option value="C">C Section</option>
</select>

<button onClick={addStudent}>
Add Student
</button>

</div>
</div>
<br/>


{/* STUDENTS TABLE */}

<table border="1">

<thead>

<tr>
<th>Name</th>
<th>Reg No</th>
<th>Dept</th>
<th>Year</th>
<th>Section</th>
<th>Present</th>
<th>Absent</th>
<th>Delete</th>
</tr>

</thead>


<tbody>

{students.map((s)=>(

<tr key={s._id}>

<td>{s.name}</td>
<td>{s.regno}</td>
<td>{s.department}</td>
<td>{s.year}</td>
<td>{s.section}</td>

<td>

<button
onClick={()=>markAttendance(s._id,"Present")}
style={{
backgroundColor: attendance[s._id] === "Present" ? "green" : "",
color: attendance[s._id] === "Present" ? "white" : ""
}}
>
Present
</button>

</td>


<td>

<button
onClick={()=>markAttendance(s._id,"Absent")}
style={{
backgroundColor: attendance[s._id] === "Absent" ? "red" : "",
color: attendance[s._id] === "Absent" ? "white" : ""
}}
>
Absent
</button>

</td>


<td>

<button onClick={()=>deleteStudent(s._id)}>
Delete
</button>

</td>

</tr>

))}

</tbody>

</table>

</div>

);

}

export default StaffDashboard;