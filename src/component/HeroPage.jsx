import React from "react";
import Main from "../template/Main";
import Status from "../template/Status";
import Testimonials from "../template/Testimonials";
import FAQ from "../template/FAQ";
import Footer from "./Footer";
import Navbar from "./Navbar";

const HeroPage = () => {
  return (
    <div>
      <Navbar />

      <Main />
      <Testimonials />
      <Status />
      <FAQ />
    
    </div>
  );
};

export default HeroPage;
