import React from "react";
import Image from "next/image";
import Link from "next/link";

const FoodCard = ({ food }) => {
  const { id, dish_name, image_link } = food;

  return (
    <div className="card bg-base-100 shadow-sm">
      <figure>
        <Image width={400} height={400} src={image_link} alt={dish_name} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {dish_name}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>
          A card component has a figure, a body part, and inside body there are
          title and actions parts
        </p>
        <div className="card-actions justify-end">
          <Link href={`/Manu/${id}`}>
            <div className="badge badge-outline">Show Details</div>
          </Link>
          <div className="badge badge-outline">Order Now</div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
