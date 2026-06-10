import React from "react";
import Main from "../template/Main";
import Status from "../template/Status";
import Testimonials from "../template/Testimonials";
import FAQ from "../template/FAQ";
import Footer from "./Footer";

const HeroPage = () => {
  return (
    <div>
      <Main />
      <Testimonials />
      <Status />
      <FAQ />
      <Footer />
    </div>
  );
};

export default HeroPage;
