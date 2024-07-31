import "./App.css";
import About from "./component/About";
import Alert from "./component/Alert";
import Navbar from "./component/Navbar";
import TextForm from "./component/TextForm";
import React, { useState } from "react";

// import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [modeText, setModeText] = useState("Dark mode");
  const [alert, setAlert] = useState(" ");
  const [background, setBackground] = useState("black");

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      showAlert();
    }, 4000);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "black";
      setModeText("Light Mode");
      showAlert("Dark mode on!!", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      setModeText("Dark mode");
      showAlert("Light mode on!!", "success");
    }
  };

  const changeBackgroundColor = (color) => {
    setBackground(color);
    document.body.style.backgroundColor = color;
  };

  return (
    <>
      {/* <Router>
        <div>
          <Navbar
            title="SakshiApp"
            aboutText="About Sakshi"
            mode={mode}
            toggleMode={toggleMode}
            modeText={modeText}
            changeBackgroundColor={changeBackgroundColor}
          />
          <Alert alert={alert} showAlert={showAlert} />
          <Routes>
            <Route path="/about" element={<About />} />
            <Route
              path="/"
              element={
                <TextForm
                  heading="Enter your text to analyse"
                  mode={mode}
                  showAlert={showAlert}
                />
              }
            />
          </Routes>
        </div>
      </Router> */}

      <Navbar
        title="SakshiApp"
        aboutText="About Sakshi"
        mode={mode}
        toggleMode={toggleMode}
        modeText={modeText}
        changeBackgroundColor={changeBackgroundColor}
      />
      <Alert alert={alert} showAlert={showAlert} />

      <TextForm
        heading="Enter your text to analyse"
        mode={mode}
        showAlert={showAlert}
      />
    </>
  );
}

export default App;
