import React from "react";
import "../App.css";

const Signup = ({ fdata, setFdata }) => {
  return (
    <div className="sign-up-container">
      <input
        type="email"
        placeholder="Email..."
        value={fdata.email}
        onChange={(e) => setFdata({ ...fdata, email: e.target.value })}
      />
      <input
        type="password"
        placeholder="Password"
        value={fdata.password}
        onChange={(e) => setFdata({ ...fdata, password: e.target.value })}
      />
      <input
        type="password"
        placeholder="Confirm Password"
        value={fdata.confirmPassword}
        onChange={(e) =>
          setFdata({ ...fdata, confirmPassword: e.target.value })
        }
      />
    </div>
  );
};

export default Signup;
