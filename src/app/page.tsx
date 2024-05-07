"use client";
import React, { useState } from "react";
import FormComponent from "@/components/FormComponent";
import LineComponent from "@/components/LineComponent";
import RandomLine from "@/components/RandomLine";
import Footer from "@/components/Footer";

const Home = () => {
  const [showForm, setShowForm] = useState(false);
  const [showRandomLine, setShowRandomLine] = useState(false);

  const toggleForm = () => {
    setShowForm(!showForm);
    setShowRandomLine(false);
  };

  const toggleRandomLine = () => {
    setShowRandomLine(!showRandomLine);
    setShowForm(false);
  };

  return (
    <div className="main">
      <LineComponent />
      <div
        className={`modal-overlay ${
          showForm || showRandomLine ? "active" : ""
        }`}
      />
      <div
        className={`modal-container ${
          showForm || showRandomLine ? "active" : ""
        }`}
      >
        {showForm && <FormComponent onClose={toggleForm} />}
        {showRandomLine && <RandomLine onClose={toggleRandomLine} />}
      </div>
      <Footer toggleForm={toggleForm} toggleRandomLine={toggleRandomLine} />
    </div>
  );
};

export default Home;
