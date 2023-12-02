import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";
import Home from "./components/page/Home/Home";
import Layout from "./components/layout/Layout";
import About from "./components/page/About/About";
import Application from "./components/page/Apllication/Application";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/application" element={<Application />}></Route>
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
