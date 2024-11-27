import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './RestaurantDetails.css';

function RestaurantDetails() {
  const { id } = useParams();
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    fetch(`https://apifakedelivery.vercel.app/restaurants/${id}`)
      .then((response) => response.json())
      .then(setRestaurant)
      .catch((error) => console.error("Erro ao carregar detalhes:", error));
  }, [id]);

  if (!restaurant) {
    return <p>Carregando...</p>;
  }

  return (
    <div className="restaurant-details-container">
      <div className="restaurant-details">
        <img
          src={restaurant.image}
          className="restaurant-image"
          alt={`Imagem de ${restaurant.name}`}
        />
        <div className="restaurant-info">
          <h2 className="restaurant-name">{restaurant.name}</h2>
          <p className="restaurant-description">{restaurant.description}</p>
          <p><b>Avaliação:⭐</b> {restaurant.rating}</p>
        </div>
      </div>
    </div>
  );
}

export default RestaurantDetails;


