import React from "react";

const Navbar = (props) => {
  const userLinks = (
    <p>
      Admin |  
      <a
        id="logout"
        onClick={props.logOut}
        className="logs"
      >
        Log out
      </a>
    </p>
  );

  const guestLinks = <button className="login">Login</button>;

  return (
    <header className="head">
      <div className="navigation">
        <a href="/home">
          <img
            className="logo"
            src="https://res.cloudinary.com/dgjlsw4uw/image/upload/v1552703828/logoo2.png"
          />
        </a>
        <small className="profile">{props.isAuthenticated ? userLinks : guestLinks}</small>
      </div>
    </header>
  );
};

export default Navbar;
