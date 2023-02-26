import React from "react";

const CardNote = () => {
  return (
    <>
      <li className="cardNote">
        <div>
          <strong>Titulo Nota</strong>
          <div>Delete</div>
        </div>
        <textarea
          readOnly
          defaultValue="Anotaçao em si abcde lorem ipslum compra compra vendfe vende abcde"
        ></textarea>
        <span>• Important!</span>
      </li>
    </>
  );
};

export default CardNote;
