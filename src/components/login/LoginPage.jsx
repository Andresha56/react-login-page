import { useState } from "react";
import Wrapper from "../style/wrapper/Wrapper";

export const LoginPage = () => {
  // ----handel----form---data------
  const [input, setInput] = useState({
    name: "",
    password: "",
  });
  const handelInput = (e) => {
    const { name, value } = e.target;
    setInput((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handelSubmit = (e) => {
    e.preventDefault();
  };

  // ----handel---checked---boxes---
  const [isChecked, setIsChecked] = useState([]);
  const handelChecks = (e) => {
    const { name, checked } = e.target;
    if (checked) {
      setIsChecked([...isChecked, name]);
    } else {
      setIsChecked(isChecked.filter((item) => item !== name));
    }
  };


  return (
    <Wrapper>
      <div className="ImageAndLoginFormContainer form">
        {/* -----div---containing--image--- */}
        <div className="ImageContainer">
          <figure>
            <img src="./login.png" alt="Login Page img" />
          </figure>
        </div>
        {/* ----div---containing----login---form--- */}
        <div className="formContainer">
          <h2 className="heading">Login</h2>

          <form onSubmit={handelSubmit}>
            <label>Username</label>
            <input
              type="text"
              placeholder="Enter username"
              name="username"
              onChange={handelInput}
            />

            <label>Password</label>
            <input
              type="password"
              placeholder="Enter password"
              name="password"
              onChange={handelInput}
            />

            {/* -----login-options--- */}

            <div className="login-options">
              <div className="checkboxes">
                <label>
                  <input type="checkbox" name="rememberMe"  onChange={handelChecks}/>
                  Remember me
                </label>
                <div>
                <label>
                  <input type="checkbox"  name="agreeToTerms"  onChange={handelChecks} />
                  Agree to
                </label>
                <a href="/">Terms & Conditions</a>
                </div>
              </div>

              <div className="change-password">
                <a href="/">change password</a>
              </div>
            </div>

            {/* ----submit--btn- */}
            <button className="submit-btn" type="submit">
              LogIn
            </button>

            <div className="register-here">
              <h2>Dont have an account?</h2>
              <a href="/">Register here</a>
            </div>
          </form>
        </div>
      </div>
    </Wrapper>
  );
};
