import React from "react";

const FoodCard = ({ item }) => {
  const { name, image, price, recipe } = item;
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt="food picture" />
        <div className="card-actions justify-end">
          <div className="badge badge-secondary absolute right-0 mr-4 -mt-24 text-xl">${price}</div>
        </div>
      </figure>
      <div className="card-body">
      
        <h2 className="card-title">{name}</h2>
        
        <p>{recipe}</p>

        <div className="card-actions justify-end">
          <button className="btn btn-active">Order Now</button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
