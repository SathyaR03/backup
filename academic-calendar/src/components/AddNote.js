import React, { useState } from "react";

const AddNote = ({ selectedDate, onSave }) => {
  const [note, setNote] = useState("");

  return (
    <div className="p-4 bg-gray-200 rounded-lg">
      <h3 className="font-bold">Add Note for {selectedDate}</h3>
      <textarea
        value={note}
        onChange={(e) => setNote(e.target.value)}
        className="w-full p-2 mt-2 border rounded"
      />
      <button
        onClick={() => onSave(note)}
        className="mt-2 bg-blue-500 text-white px-4 py-2 rounded"
      >
        Save Note
      </button>
    </div>
  );
};

export default AddNote;
