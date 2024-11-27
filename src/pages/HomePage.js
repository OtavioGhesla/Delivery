import React from "react";
import RestaurantList from "../components/RestaurantList";
import './HomePage.css';

function HomePage() {
  return (
    <main role="main">
      <h1>Restaurantes</h1>
      <div className="album py-5">
        <div className="container">
          <RestaurantList />
        </div>
      </div>
    </main>
  );
}

export default HomePage;
