import React from "react";
import Customer from "./Customer";

const Waiter = ({ customers }) => {
  return (
    <div className="p-4 border rounded shadow-lg mt-4">
      <h2 className="text-xl font-bold">Waiter Serving Customers</h2>
      {customers.map((customer, index) => (
        <Customer key={index} name={customer.name} orders={customer.orders} />
      ))}
    </div>
  );
};

export default Waiter;