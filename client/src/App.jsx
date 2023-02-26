import React, { useState } from "react";
import CardNote from "./components/CardNote";
import "./global.css";
import "./sidebar.css";

function App() {
  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="App">
      <div className="aside">
        <h1>New Note</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-block">
            <label htmlFor="title">Title</label>
            <input type="text" value={title} />
          </div>
          <div className="input-block">
            <label htmlFor="note">Note</label>
            <textarea required value={note} />
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
