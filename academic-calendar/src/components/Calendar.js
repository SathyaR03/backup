import React, { useState } from "react";
import { format, addMonths, subMonths } from "date-fns";

const Calendar = ({ events, onDateClick }) => {
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const nextMonth = () => setCurrentMonth(addMonths(currentMonth, 1));
  const prevMonth = () => setCurrentMonth(subMonths(currentMonth, 1));

  return (
    <div className="p-4 bg-white shadow-lg rounded-lg">
      <div className="flex justify-between items-center mb-4">
        <button onClick={prevMonth} className="px-4 py-2 bg-gray-300 rounded">
          ←
        </button>
        <h2 className="text-lg font-bold">{format(currentMonth, "MMMM yyyy")}</h2>
        <button onClick={nextMonth} className="px-4 py-2 bg-gray-300 rounded">
          →
        </button>
      </div>
      <div className="grid grid-cols-7 gap-2">
        {Array.from({ length: 30 }, (_, i) => (
          <button
            key={i}
            className="p-2 bg-blue-200 rounded"
            onClick={() => onDateClick(i + 1)}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
