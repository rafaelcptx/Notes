import React, { useState } from "react";
import CardNote from "./components/CardNote";
import "./global.css";
import "./sidebar.css";
import api from "./services/api";

function App() {
  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await api.post("/notes", {
      title,
      note,
      priority: false,
    });
  };

  return (
    <div className="App">
      <div className="aside">
        <h1>New Note</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-block">
            <label htmlFor="title">Title</label>
            <input
              type="text"
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
          <CardNote />
          <CardNote />
          <CardNote />
          <CardNote />
          <CardNote />
          <CardNote />
          <CardNote />
        </ul>
      </main>
    </div>
  );
}

export default App;
