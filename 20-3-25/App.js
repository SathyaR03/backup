import React, { useState } from "react";
import Waiter from "./components/Waiter";
import Chef from "./components/Chef";

const App = () => {
  const [customers, setCustomers] = useState([
    { name: "John", orders: ["Pizza", "Pasta"] },
    { name: "Emma", orders: ["Burger", "Salad"] },
  ]);

  const ingredients = ["Tomato", "Cheese", "Lettuce", "Bread"];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Restaurant Management</h1>
      <Waiter customers={customers} />
      <Chef ingredients={ingredients} />
    </div>
  );
};

export default App;