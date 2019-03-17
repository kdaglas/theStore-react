import React from "react";

const Login = props => {
  return (
    <section id="contain">
      <div className="login_box">
        <div className="holder">
          <div className="desscription">
            <img src="https://res.cloudinary.com/dgjlsw4uw/image/upload/v1552703829/intro.png" />
          </div>
          <div className="fillups">
            <div className="heading">
              <img
                className="logo"
                src="https://res.cloudinary.com/dgjlsw4uw/image/upload/v1552703828/logoo.png"
              />
              <p> Welcome back <br /> Login to resume your sales. </p>
            </div>
            <form onSubmit={props.onSubmit} id="logging-in">
              <div className="input-field">
                <input type="text" name="attendant_name" id="username" placeholder="Username" required="" onChange={props.onChange} />
                <input type="password" id="password" name="password" placeholder="Password" required="" onChange={props.onChange} />
                <input type="submit" name="" value="Log In" />
              </div>
              <p />
              <p className="error-message">{props.message}</p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
