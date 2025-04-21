import React from "react";

const FactCard = ({ fact, onRefresh }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md text-center max-w-lg mx-auto">
      <p className="text-xl font-semibold">{fact}</p>
      <button
        onClick={onRefresh}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        🔄 Get New Fact
      </button>
    </div>
  );
};

export default FactCard;
