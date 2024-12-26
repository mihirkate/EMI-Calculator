import React from "react";
import Navbar from "./components/Navbar";
import LoanTabs from "./components/LoanTabs";
import FeaturedArticles from "./components/FeaturedArticles";
import EMISchedule from "./components/EMISchedule";
import "./App.css";
import Information from "./components/Information";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <div>
        <div className="container mx-auto p-4 grid grid-cols-1 md:grid-cols-3 gap-4 bg-customWhite">
          <div className="col-span-2">
            <LoanTabs />
          </div>
          <div>
            <FeaturedArticles />
            <EMISchedule />
          </div>
        </div>
        <Information />
      </div>
      <br />
      <Footer />
    </>
  );
}

export default App;
