import { Link } from "react-router-dom";

export default function Register() {
  return (
    <div className="form-wrapper">
      <form>
        <div className="login-heading">User Registration</div>
        <div className="register">Register</div>
        <input
          className="name"
          spellCheck="false"
          type="text"
          placeholder="Name"
        />
        <input
          className="email"
          spellCheck="false"
          type="email"
          placeholder="Email"
        />
        <input className="password" type="password" placeholder="Password" />
        <button>Submit</button>
        <span>
          Already have an account? <Link to="/login">Log in</Link>
        </span>
      </form>
    </div>
  );
}
