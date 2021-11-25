import React, { useState } from "react";
import Otherinfo from "./Otherinfo";
import Personal from "./Personal";
import Signup from "./Signup";
import "../App.css";
const Form = () => {
  const [page, setPage] = useState(0);
  const [fdata, setFdata] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
    username: "",
    nationality: "",
    other: "",
  });
  const FormTitles = ["Signup Page", "Personal Page", "Other Page"];

  const FormDisplay = () => {
    if (page === 0) {
      return <Signup fdata={fdata} setFdata={setFdata} />;
    } else if (page === 1) {
      return <Personal fdata={fdata} setFdata={setFdata} />;
    } else {
      return <Otherinfo fdata={fdata} setFdata={setFdata} />;
    }
  };
  return (
    <div className="form">
      <div className="progressbar">
        <div
          style={{
            width: page === 0 ? "33.3%" : page === 1 ? "66.6%" : "100%",
          }}
        ></div>
      </div>
      <div className="form-container">
        <div className="header">{FormTitles[page]}</div>
        <div className="body">{FormDisplay()}</div>
        <div className="footer">
          <button
            disabled={page === 0}
            onClick={() => {
              setPage(page - 1);
            }}
          >
            Prev
          </button>
          <button
            onClick={() => {
              if (page === FormTitles.length - 1) {
                alert("FORM SUBMITTED");
              } else {
                setPage(page + 1);
              }
            }}
          >
            {page === FormTitles.length - 1 ? "Submit" : "Next"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Form;
