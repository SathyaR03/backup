import React, { useState } from "react";
import Calendar from "./components/Calendar";
import EventList from "./components/EventList";
import AddNote from "./components/AddNote";

const events = [
  { date: "April 10", name: "Project Deadline" },
  { date: "April 15", name: "Exam Day" },
];

function App() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [notes, setNotes] = useState({});

  const handleSaveNote = (note) => {
    setNotes({ ...notes, [selectedDate]: note });
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-4">Academic Calendar</h1>
      <Calendar events={events} onDateClick={setSelectedDate} />
      {selectedDate && (
        <AddNote selectedDate={selectedDate} onSave={handleSaveNote} />
      )}
      <EventList events={events} />
    </div>
  );
}

export default App;
