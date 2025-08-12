import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import Itinerary from "./pages/Itinerary";
import Organization from "./pages/Organization";
import Info from "./pages/Info";
import { Toaster } from "./components/ui/toaster";

function App() {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div className="App">
      <BrowserRouter>
        <div className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-50">
          <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
          <main className="pt-20">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/itinerary" element={<Itinerary />} />
              <Route path="/organization" element={<Organization />} />
              <Route path="/info" element={<Info />} />
            </Routes>
          </main>
          <Toaster />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;