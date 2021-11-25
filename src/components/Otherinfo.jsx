import React from "react";
import "../App.css"
const Otherinfo = ({ fdata, setFdata }) => {
  return (
    <div className="other-info-container">
      <input
        type="text"
        placeholder="Nationality"
        value={fdata.nationality}
        onChange={(e) => setFdata({ ...fdata, nationality: e.target.value })}
      />
      <input
        type="text"
        placeholder="Others..."
        value={fdata.other}
        onChange={(e) => setFdata({ ...fdata, other: e.target.value })}
      />
    </div>
  );
};

export default Otherinfo;
