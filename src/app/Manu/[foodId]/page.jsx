import React from "react";

const FoodDetailsPage = async ({ params }) => {
  const { foodId } = await params;

  const res = await fetch(
    `https://phi-lab-server.vercel.app/api/v1/lab/foods/${foodId}`,
  );

  const data = await res.json();
  const food = data.data;

  return (
    <div>
      <h2>Food Details: {foodId}</h2>

      <h3>{food.dish_name}</h3>

      <p>Category: {food.category}</p>

      <p>Cuisine: {food.cuisine}</p>

      <p>Rating: {food.rating}</p>

      <p>Price: {food.price} BDT</p>

      <h3>Ingredients</h3>

      <ul>
        {food.main_ingredients.map((ingredient) => (
          <li key={ingredient}>{ingredient}</li>
        ))}
      </ul>

      <h3>Cooking Steps</h3>

      <ol>
        {food.cooking_steps.map((step) => (
          <li key={step}>{step}</li>
        ))}
      </ol>
    </div>
  );
};

export default FoodDetailsPage;
