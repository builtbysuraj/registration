import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Login({ setUserData }) {
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    if (email === "" || password === "") {
      toast.error("Please enter valid input");
      return;
    }
    try {
      const response = await axios.post(
        "https://user-registration-zpxs.onrender.com/api/users/login",
        {
          email,
          password,
        }
      );
      if (response.data.message === "Login Successful") {
        toast.success(response.data.message);
        setUserData(response.data.user);
        navigate("/");
      } else toast.error(response.data.message);
    } catch (error) {
      toast.error(response.data.message);
    }
  };

  return (
    <div className="form-wrapper">
      <ToastContainer />
      <form onSubmit={handleSubmit}>
        <div className="login-heading">User Registration</div>
        <div className="register">Login</div>
        <input
          name="email"
          className="email"
          spellCheck="false"
          type="email"
          placeholder="Email"
        />
        <input
          name="password"
          className="password"
          type="password"
          placeholder="Password"
        />
        <button>Submit</button>
        <span>
          Already have an account? <Link to="/register">Sign up</Link>
        </span>
      </form>
    </div>
  );
}
