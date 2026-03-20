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