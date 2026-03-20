import React,{useState} from "react";
import axios from "axios";

function StudentReport(){

const [dept,setDept] = useState("CSE");
const [year,setYear] = useState("1");
const [section,setSection] = useState("A");

const [students,setStudents] = useState([]);

const searchStudents = async()=>{

 const res = await axios.get(
 `https://students-attendance-3h7f.onrender.com/api/report/${dept}/${year}/${section}`
 );

 setStudents(res.data);

};

return(

<div>

<h2>Student Attendance Report</h2>

<div style={{display:"flex",gap:"10px"}}>

<select value={dept} onChange={(e)=>setDept(e.target.value)}>
<option value="CSE">CSE</option>
<option value="IT">IT</option>
<option value="ECE">ECE</option>
<option value="MECH">MECH</option>
</select>

<select value={year} onChange={(e)=>setYear(e.target.value)}>
<option value="1">1st Year</option>
<option value="2">2nd Year</option>
<option value="3">3rd Year</option>
<option value="4">4th Year</option>
</select>

<select value={section} onChange={(e)=>setSection(e.target.value)}>
<option value="A">A</option>
<option value="B">B</option>
<option value="C">C</option>
</select>

<button onClick={searchStudents}>
Search
</button>

</div>

<br/>

<table border="1">

<thead>

<tr>
<th>Name</th>
<th>Reg No</th>
<th>Dept</th>
<th>Year</th>
<th>Section</th>
<th>Total Present</th>
<th>Total Absent</th>
</tr>

</thead>

<tbody>

{students.map((s,i)=>(

<tr key={i}>
<td>{s.name}</td>
<td>{s.regno}</td>
<td>{s.dept}</td>
<td>{s.year}</td>
<td>{s.section}</td>
<td>{s.present}</td>
<td>{s.absent}</td>
</tr>

))}

</tbody>

</table>

</div>

);

}

export default StudentReport;