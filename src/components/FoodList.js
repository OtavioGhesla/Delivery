import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import './FoodList.css';

function FoodList() {
  const [foods, setFoods] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://apifakedelivery.vercel.app/foods")
      .then((response) => response.json())
      .then((data) => setFoods(data.slice(0, 6)))
      .catch((error) => console.error("Erro ao carregar comidas:", error));
  }, []);

  const handleFoodClick = (foodId) => {
    navigate(`/foods/${foodId}`);
  };

  return (
    <div className="row">
      {foods.map((food) => (
        <div key={food.id} className="col-lg-4 col-md-6 col-12 mb-3">
          <div
            className="card food-card estilo-card"
            onClick={() => handleFoodClick(food.id)}
          >
            <img
              src={food.image}
              className="card-img-top"
              alt={food.name}
              style={{ borderTopLeftRadius: "1rem", borderTopRightRadius: "1rem" }}
            />
            <div className="card-body">
              <h5 className="card-title">{food.name}</h5>
              <p className="card-text">{food.description}</p>
              <p><b>R$ {food.price.toFixed(2)}</b></p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default FoodList;


