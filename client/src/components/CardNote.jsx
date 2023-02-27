import React, { useState } from "react";
import "./style-priority.css";
import "./style.css";
import api from "../services/api";

const CardNote = ({ data }) => {
  const [changedNote, setChangedNote] = useState("");

  const handleEdit = async (e, note) => {
    if (changedNote && changedNote != note) {
      await api.post(`/content/${data._id}`, { note: changedNote });
      alert(`Note: "${data.title}" successfully edited!`);
    }
  };

  const handleDelete = async () => {
    let response = prompt(
      `Are you sure that you want to delete "${data.title}" note? Input "yes" to confirm.`
    );
    if (response == "yes") {
      await api.delete(`/notes/${data._id}`);
    }
  };

  const handlePriority = async () => {
    await api.post(`/priorities/${data._id}`);
  };

  return (
    <>
      <li className={data.priority ? "priorityCardNote" : "cardNote"}>
        <div>
          <strong>{data.title}</strong>
          <div onClick={handleDelete}>Delete</div>
        </div>
        <textarea
          onChange={(e) => setChangedNote(e.target.value)}
          onBlur={(e) => handleEdit(e.target.value, data.note)}
          defaultValue={data.note}
        />
        <span onClick={handlePriority}>• Important!</span>
      </li>
    </>
  );
};

export default CardNote;
