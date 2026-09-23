"use client";
import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncrease = () => {
    console.log("Increase button clicked");
    setCount(count + 1);
  };
  return (
    <div>
      <h2 className="text-3xl font-bold">Counter:{count}</h2>
      <button
        onClick={handleIncrease}
        className="bg-amber-300 text-black m-5 p-5 cursor-pointer hover:bg-blue-200"
      >
        Increase
      </button>
    </div>
  );
};

export default Counter;
