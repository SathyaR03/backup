import React from "react";

const Customer = ({ name, orders }) => {
  return (
    <div className="p-4 border rounded shadow-lg">
      <h2 className="text-xl font-bold">Customer: {name}</h2>
      <p className="text-sm">Orders: {orders.join(", ")}</p>
    </div>
  );
};

export default Customer;