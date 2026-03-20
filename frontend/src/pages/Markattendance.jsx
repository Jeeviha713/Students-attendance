const markAttendance = async (id,status)=>{

 setAttendance({
  ...attendance,
  [id]:status
 });

 await axios.post("http://localhost:5000/api/attendance/mark",{
   studentId:id,
   status:status
 });

};