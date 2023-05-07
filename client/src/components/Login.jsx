import { Link } from "react-router-dom";

export default function Login() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="form-wrapper">
      <form onSubmit={handleSubmit}>
        <div className="login-heading">User Registration</div>
        <div className="register">Login</div>
        <input
          className="email"
          spellCheck="false"
          type="email"
          placeholder="Email"
        />
        <input className="password" type="password" placeholder="Password" />
        <button>Submit</button>
        <span>
          Already have an account? <Link to="/register">Sign up</Link>
        </span>
      </form>
    </div>
  );
}
