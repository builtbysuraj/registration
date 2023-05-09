import { useState } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

export default function Home({ userData, setUserData }) {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [reenteredPassword, setReenteredPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Perform validation checks
    if (newPassword !== reenteredPassword) {
      toast.error("Please Re-enter password correctly");
      return;
    }
    // Make API call to server to update password
    try {
      const response = await axios.post(
        "http://localhost:5005/api/users/change-password",
        {
          userId: userData._id,
          oldPassword,
          newPassword,
          reenteredPassword,
        }
      );
      if (response.data.message === "Old password didn't match") {
        toast.error(response.data.message);
      } else if (response.data.message === "Password changed successfully") {
        toast.success(response.data.message);
      } else if (
        response.data.message === "Please Re-enter password correctly"
      ) {
      }
    } catch (error) {
      toast.error(error);
    }
  };

  if (!userData || !userData._id) {
    return <Navigate to="/login" />;
  }
  const { name, email } = userData;
  return (
    <div className="home">
      <ToastContainer />
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
        <form onSubmit={handleSubmit}>
          <div className="form-heading">Change password</div>
          <input
            type="password"
            placeholder="Old password"
            value={oldPassword}
            onChange={(event) => setOldPassword(event.target.value)}
          />
          <input
            type="password"
            placeholder="New password"
            value={newPassword}
            onChange={(event) => setNewPassword(event.target.value)}
          />
          <input
            type="password"
            placeholder="Re-enter new password"
            value={reenteredPassword}
            onChange={(event) => setReenteredPassword(event.target.value)}
          />
          <button className="submit-btn" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
