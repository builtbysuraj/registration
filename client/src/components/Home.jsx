import { Navigate } from "react-router-dom";

export default function Home({ userData, setUserData }) {
  if (!userData || !userData._id) {
    return <Navigate to="/login" />;
  }
  const { name, email } = userData;
  // console.log(userData);
  return (
    <div className="home">
      <div className="home-wrapper">
        <div className="details">
          <div className="heading">User Details</div>
          <div className="name">
            <span>Name: </span>
            <em>{name}</em>
          </div>
          <div className="email">
            <span>Email: </span> <em>{email}</em>
          </div>
          <button onClick={() => setUserData({})} className="log-out">
            Log out
          </button>
        </div>
        <form>
          <div className="form-heading">Change password</div>
          <input type="password" placeholder="Old password" />
          <input type="password" placeholder="New password" />
          <input type="password" placeholder="Re-enter new password" />
          <button className="submit-btn" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
