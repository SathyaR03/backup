import React from "react";

const EventList = ({ events }) => {
  return (
    <div className="p-4 bg-gray-100 rounded-lg">
      <h3 className="text-lg font-bold mb-2">Important Events</h3>
      <ul>
        {events.map((event, index) => (
          <li key={index} className="mb-1">
            {event.date}: {event.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EventList;
