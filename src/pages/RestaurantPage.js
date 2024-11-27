import React from "react";
import RestaurantDetails from "../components/RestaurantDetails";
import FoodList from "../components/FoodList";
import './RestaurantPage.css';

function RestaurantPage() {
  return (
    <main className="restaurant-page">
      <RestaurantDetails />
      <FoodList />
    </main>
  );
}

export default RestaurantPage;

