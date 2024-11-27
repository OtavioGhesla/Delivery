import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import RestaurantPage from "./pages/RestaurantPage";
import FoodPage from "./pages/FoodPage";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/restaurantes/:id" element={<RestaurantPage />} />
        <Route path="/foods/:id" element={<FoodPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

