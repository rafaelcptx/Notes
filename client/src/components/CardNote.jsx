import React from "react";
import "./style-priority.css";
import "./style.css";

const CardNote = ({ data }) => {
  return (
    <>
      <li className={data.priority ? "priorityCardNote" : "cardNote"}>
        <div>
          <strong>{data.title}</strong>
          <div>Delete</div>
        </div>
        <textarea readOnly defaultValue={data.note} />
        <span>• Important!</span>
      </li>
    </>
  );
};

export default CardNote;
