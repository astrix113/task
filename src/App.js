import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../src/components/Home.jsx";
import Card from "../src/components/Card.jsx";

const App = () => {
  const [user, setUser] = useState(null);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home setUser={setUser} />} />
        <Route path="/card" element={<Card user={user} />} />
      </Routes>
    </Router>
  );
};

export default App;
