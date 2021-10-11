import React from "react";
import "./App.css";
import Navbar from "./navbar/navbar";
import Section1 from "./section1CreateQR/section1";
import Section2 from "./section2/section2";
import Section3 from "./section3/section3";
import Section4 from "./section4/section4";
import Section5 from "./section5/section5";
import Section6 from "./section6/Section6";
import Footer from "./footer/footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Footer />
    </div>
  );
}

export default App;
