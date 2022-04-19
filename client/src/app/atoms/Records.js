import React from "react";
import "./style.css";

export default function records({
  Food = "Food",
  FoodType = "Food Type",
  Toys = "Toys",
  Utensils = "Utensils",
  quantity = "Quantity",
  unit = "Unit",
  header=false
}) {
  return (
    <div className="tab_cont">
      <h1>
        {Food}
      </h1>
      <h1>
        {FoodType}
      </h1>
      <h1>
        {Toys}
      </h1>
      <h1>
        {Utensils}
      </h1>
      <h1>
        {quantity}
      </h1>
      <h1>
        {unit}
      </h1>
    </div>
  );
}
