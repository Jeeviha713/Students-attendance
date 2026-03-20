import { useNavigate } from "react-router-dom";
import "./login.css";

function Login() {

  const navigate = useNavigate();

  return (
    <div className="login-container">

      <div className="login-card">

        {/* Student Login */}
        <div className="login-left">
          <h2>Student Login</h2>

          <input type="text" placeholder="Username" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />

          <button 
  onClick={() => navigate("/student")}
  style={{background:"#142333", color:"white", width:"120px",marginLeft:"70px"}}
>
  Login
</button>
        </div>


        {/* Staff Login */}
        <div className="login-right">
          <h2>Staff Login</h2>

          <input type="text" placeholder="Username" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />

          <button 
  onClick={() => navigate("/staff")}
  style={{background:"#002752", color:"white" , width:"120px",marginLeft:"70px"}}
>
  Login
</button>
        </div>

      </div>

    </div>
  );
}

export default Login;