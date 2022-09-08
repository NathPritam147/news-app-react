import "./App.css";

import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import About from "./components/About";
import Contact from "./components/Contact";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// API KEy: 41d31745fefa4ae29ad07916afb23e7a
export default class App extends Component {
  // const [mode, setMode] = useState("light");
  // const [alert, setAlert] = useState(null);

  // // toggle light and dark mode and display alert
  // const toggleMode = () => {
  //   if (mode === "light") {
  //     setMode("dark");
  //     document.body.style.backgroundColor = "#061019";
  //     // showAlert("Dark mode has been enabled!", "success");
  //   } else {
  //     setMode("light");
  //     document.body.style.backgroundColor = "white";
  //     // showAlert("Light mode has been enabled!", "success");
  //   }
  // };
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <Routes>
            <Route
              exact
              path="/"
              element={
                <News
                  key={"home"}
                  pageSize={6}
                  country={"in"}
                  category={"general"}
                />
              }
            />
            <Route
              exact
              path="/general"
              element={
                <News
                  key={"general"}
                  pageSize={6}
                  country={"in"}
                  category={"general"}
                />
              }
            />
            <Route
              exact
              path="/business"
              element={
                <News
                  key={"business"}
                  pageSize={6}
                  country={"in"}
                  category={"business"}
                />
              }
            />
            <Route
              exact
              path="/health"
              element={
                <News
                  key={"health"}
                  pageSize={6}
                  country={"in"}
                  category={"health"}
                />
              }
            />
            <Route
              exact
              path="/technology"
              element={
                <News
                  key={"technology"}
                  pageSize={6}
                  country={"in"}
                  category={"technology"}
                />
              }
            />
            <Route
              exact
              path="/science"
              element={
                <News
                  key={"science"}
                  pageSize={6}
                  country={"in"}
                  category={"science"}
                />
              }
            />
            <Route
              exact
              path="/sports"
              element={
                <News
                  key={"sports"}
                  pageSize={6}
                  country={"in"}
                  category={"sports"}
                />
              }
            />
            <Route
              exact
              path="/entertainment"
              element={
                <News
                  key={"entertainment"}
                  pageSize={6}
                  country={"in"}
                  category={"entertainment"}
                />
              }
            />
            <Route
              path="/about"
              element={<About title="About Us - NewsLive" mode={"light"} />}
            />
            <Route
              path="/contact"
              element={<Contact title="Contact Us - NewsLive" mode={"light"} />}
            />
          </Routes>
        </Router>
      </div>
    );
  }
}
