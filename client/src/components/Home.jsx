export default function Home() {
  return (
    <div className="home">
      <div className="home-wrapper">
        <div className="details">
          <div className="heading">User Details</div>
          <div className="name">
            <span>Name: </span>
            <em>MyName</em>
          </div>
          <div className="email">
            <span>Email: </span> <em>example@gmail.com</em>
          </div>
          <button className="log-out">Log out</button>
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
