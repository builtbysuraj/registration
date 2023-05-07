import { Link } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function Register() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    try {
      const response = await axios.post(
        "http://localhost:5000/api/users/register",
        {
          name,
          email,
          password,
        }
      );
      toast.success(response.data.message);
    } catch (error) {
      toast.error("An error occurred while registering the user.");
    }
  };

  return (
    <div className="form-wrapper">
      <ToastContainer />
      <form onSubmit={handleSubmit}>
        <div className="login-heading">User Registration</div>
        <div className="register">Register</div>
        <input
          className="name"
          spellCheck="false"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="email"
          spellCheck="false"
          type="email"
          placeholder="Email"
          name="email"
        />
        <input
          className="password"
          type="password"
          placeholder="Password"
          name="password"
        />
        <button>Submit</button>
        <span>
          Already have an account? <Link to="/login">Log in</Link>
        </span>
      </form>
    </div>
  );
}
