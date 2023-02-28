import React, { useState, useEffect } from "react";
import CardNote from "./components/CardNote";
import "./global.css";
import "./sidebar.css";
import api from "./services/api";

function App() {
  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");
  const [allNotes, setAllNotes] = useState([]);

  useEffect(() => {
    const getNotes = async () => {
      const response = await api.get("/notes");

      setAllNotes(response.data);
    };

    getNotes();
  }, [allNotes]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await api.post("/notes", {
      title,
      note,
      priority: false,
    });

    setAllNotes([...allNotes, response.data]);

    alert(`Note: "${title}" succesfully created!`);

    setTitle("");
    setNote("");
  };

  return (
    <div className="App">
      <div className="aside">
        <h1>New Note</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-block">
            <label htmlFor="title">Title</label>
            <input
              maxLength={20}
              type="text"
              required
              onChange={(e) => setTitle(e.target.value)}
              value={title}
            />
          </div>
          <div className="input-block">
            <label htmlFor="note">Note</label>
            <textarea
              required
              onChange={(e) => setNote(e.target.value)}
              value={note}
            />
          </div>
          <button type="submit">Save</button>
        </form>
      </div>
      <main>
        <ul>
          {allNotes.map((data) => (
            <CardNote data={data} key={data._id} />
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;
