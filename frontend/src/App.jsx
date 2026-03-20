import Login from "./pages/Login";
import StaffDashboard from "./pages/StaffDashboard";
import StudentDashboard from "./pages/StudentDashboard";
import StudentReport from "./pages/StudentReport";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App(){

return(

<BrowserRouter>

<Routes>

<Route path="/" element={<Login />} />

<Route path="/staff" element={<StaffDashboard />} />

<Route path="/student" element={<StudentDashboard />} />

<Route path="/report" element={<StudentReport />} />

</Routes>

</BrowserRouter>

)

}

export default App;