import React from "react";
import "../App.css";

const Personal = ({ fdata, setFdata }) => {
  return (
    <div className="personal-info-container">
      <input
        type="text"
        placeholder="First Name"
        value={fdata.fname}
        onChange={(e) => setFdata({ ...fdata, fname: e.target.value })}
      />
      <input
        type="text"
        placeholder="Last Name"
        value={fdata.lname}
        onChange={(e) => setFdata({ ...fdata, lname: e.target.value })}
      />
      <input
        type="text"
        placeholder="Userame"
        value={fdata.username}
        onChange={(e) => setFdata({ ...fdata, username: e.target.value })}
      />
    </div>
  );
};

export default Personal;
