import React from 'react';

function Pointer ({number, setQuestion, questionObj, count}) {

  const isUsed = number >= count;

  const clickHandler = () => {
    if (isUsed) {
      setQuestion(questionObj);
    }
  };

  return (
    <div className={`pointer pointer-${number}`} onClick={clickHandler}>
      <img src={!isUsed ?"../../img/close.png" : "../../img/placeholder.png"} alt="map" height="50" width="50"/>
    </div>
  );
};

export default Pointer;
