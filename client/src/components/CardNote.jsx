import React from "react";

const CardNote = ({ data }) => {
  return (
    <>
      <li className="cardNote">
        <div>
          <strong>{data.title}</strong>
          <div>Delete</div>
        </div>
        <textarea readOnly defaultValue={data.note}></textarea>
        <span>• Important!</span>
      </li>
    </>
  );
};

export default CardNote;
