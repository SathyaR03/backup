import React from "react";

const Chef = ({ ingredients }) => {
  return (
    <div className="p-4 border rounded shadow-lg mt-4">
      <h2 className="text-xl font-bold">Chef Preparing Food</h2>
      <p className="text-sm">Ingredients: {ingredients.join(", ")}</p>
    </div>
  );
};