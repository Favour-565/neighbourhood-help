import React from "react";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import ResetPassword from "./pages/ResetPassword";
import Confirm from "./pages/Confirm"; // Import the correct Confirm component
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
import Page3 from "./pages/Page3";
import Page0 from "./pages/Page0";
import Page5 from "./pages/Page5";
import Flag from "./pages/Flag";


const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/resetPassword" element={<ResetPassword />} />
          <Route path="/confirm" element={<Confirm />} /> {/* Use the correct Confirm component */}
          
          <Route path="/page1" element={<Page1 />} />
          <Route path="/page2" element={<Page2 />} />
          <Route path="/page3" element={<Page3 />} />
          <Route path="/page0" element={<Page0 />} />
          <Route path="/page5" element={<Page5 />} />
          <Route path="/flag" element={<Flag/>} />
          
        </Routes>
      </Router>
    </div>
  );
};

export default App;
