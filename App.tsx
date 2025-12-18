import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import WhatIsTWP from "./components/WhatIsTWP";
import HowItWorks from "./components/HowItWorks";
import Pricing from "./components/Pricing";
import WhyBusinessesLoveIt from "./components/WhyBusinessesLoveIt";
import LogoSlider from "./components/LogoSlider";
import SubscriptionCards from "./components/SubscriptionCards";
import Footer from "./components/Footer";
import Reseller from "./components/Reseller";
import Blogs from "./components/Blogs";

function App() {
  const [currentPage, setCurrentPage] = useState("home");

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1);
      setCurrentPage(hash || "home");
      window.scrollTo(0, 0);
    };

    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  return (
    <div className="font-sans text-[#042f2e]">
      {currentPage === "blogs" ? (
        <>
          <NavBar />
          <Blogs />
          <Footer />
        </>
      ) : currentPage === "reseller" ? (
        <>
          <NavBar />
          <Reseller />
          <Footer />
        </>
      ) : (
        <div className="bg-[#fffce8]">
          <Header />
          <WhatIsTWP />
          <HowItWorks />
          <Pricing />
          <WhyBusinessesLoveIt />
          <SubscriptionCards />
          <LogoSlider />
          <Footer />
        </div>
      )}
    </div>
  );
}

export default App;
