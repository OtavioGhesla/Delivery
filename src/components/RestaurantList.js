import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './RestaurantList.css';

function RestaurantList() {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    fetch("https://apifakedelivery.vercel.app/restaurants")
      .then((response) => response.json())
      .then(setRestaurants)
      .catch((error) => console.error("Erro ao carregar restaurantes:", error));
  }, []);

  return (
    <div className="row">
      {restaurants.map((restaurant) => (
        <div key={restaurant.id} className="col-lg-4 col-md-6 col-12 mb-4">
          <Link
            to={`/restaurantes/${restaurant.id}`}
            style={{ textDecoration: "none" }}
          >
            <div className="card restaurant-card">
              <img
                src={restaurant.image}
                className="card-img-top"
                alt={`Imagem de ${restaurant.name}`}
              />
              <div className="card-body">
                <h5 className="card-title">{restaurant.name}</h5>
                <p className="card-text">{restaurant.description}</p>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <b>Avaliação: ⭐</b> {restaurant.rating}
                </li>
              </ul>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default RestaurantList;

