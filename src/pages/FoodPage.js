import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './FoodPage.css';

function FoodPage() {
  const { id } = useParams();
  const [food, setFood] = useState(null);

  useEffect(() => {
    fetch(`https://apifakedelivery.vercel.app/foods/${id}`)
      .then((response) => response.json())
      .then((data) => setFood(data))
      .catch((error) => console.error("Erro ao carregar comida:", error));
  }, [id]);

  if (!food) {
    return <p>Carregando...</p>;
  }

  return (
    <div className="food-page-container">
      <div className="food-details">
        <img
          src={food.image}
          alt={food.name}
          className="food-image"
        />
        <h2>{food.name}</h2>
        <p>{food.description}</p>
        <p><strong>Preço:</strong> R$ {food.price.toFixed(2)}</p>
      </div>
    </div>
  );
}

export default FoodPage;

