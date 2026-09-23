import React from "react";
import FoodCard from "../Components/FoodCard";

const ManuPage = async () => {
  const res = await fetch(
    "https://phi-lab-server.vercel.app/api/v1/lab/foods/top-foods",
  );

  const data = await res.json();
  const foods = data.data;

  console.log("Food data :", foods);

  return (
    <div className="m-4">
      <h2 className="flex justify-center mb-4 text-2xl font-bold">Manu Page</h2>

      <div className="grid grid-cols-3 gap-4">
        {foods.map((food) => (
          <FoodCard key={food.id} food={food} />
        ))}
      </div>
    </div>
  );
};

export default ManuPage;
