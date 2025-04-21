import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import FactCard from "./components/FactCard";
import Footer from "./components/Footer";

const App = () => {
  const [fact, setFact] = useState("Loading...");

  // Fetch new fact
  const fetchFact = async () => {
    try {
      const response = await fetch("https://uselessfacts.jsph.pl/random.json?language=en");
      const data = await response.json();
      setFact(data.text);
    } catch (error) {
      setFact("Failed to load a fact. Try again!");
    }
  };

  useEffect(() => {
    fetchFact(); // Fetch fact on load
  }, []);

  return (
    <div className="min-h-screen flex flex-col justify-between bg-gray-100">
      <Header />
      <main className="flex-grow flex items-center justify-center p-6">
        <FactCard fact={fact} onRefresh={fetchFact} />
      </main>
      <Footer />
    </div>
  );
};


export default App;
