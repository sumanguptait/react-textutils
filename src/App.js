import Navbar from "./components/Navbar";
import PropTypes from "prop-types";
import TextForm from "./components/TextForm";
import About from "./components/About";
import React, { useState } from "react";
import Alert from "./components/Alert";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      // console.log("inside light")
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been Enabled", "success");
    } else {
      setMode("light");
      // console.log("inside dark")
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been Enabled", "success");
    }
  };
  const changeGreen = () => {
    document.body.style.backgroundColor = "#35C649";
  };
  const changeYellow = () => {
    document.body.style.backgroundColor = "#CAB911";
  };
  const changeRed = () => {
    document.body.style.backgroundColor = "#C15031";
  };

  return (
    <>
      <Router>
        {/* <Navbar title="textUtils" about="about textUtils" /> */}
        {/* <Navbar/> */}
        <Navbar
          title="TextUtils"
          mode={mode}
          toggleMode={toggleMode}
          changeGreen={changeGreen}
          changeRed={changeRed}
          changeYellow={changeYellow}
        />

        <Alert alert={alert} mode={mode} />
        <div className="container my-3">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <TextForm
                  showAlert={showAlert}
                  heading="Enter the text to analyze"
                  mode={mode}
                />
              }
            ></Route>
            <Route exact path="/about" element={<About mode={mode} />}></Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  about: PropTypes.string,
};
Navbar.defaultProps = {
  title: "Set title here",
  about: "About Us",
};
