import React, {useState} from 'react';

function Pointer ({number, setQuestion, questionObj, count}) {
  const [panel, setPanel] = useState(false);

  const toggle = () => {
    setPanel((prev) => !prev);
  };

  const isUsed = number >= count;

  const clickHandler = () => {
    if (isUsed) {
      setQuestion(questionObj);
    }

  };

  return (
    <div className={`pointer pointer-${number}`} onClick={clickHandler}>
      <img src={!isUsed ?"../../img/close.png" : "../../img/placeholder.png"} alt="map" height="50" width="50"/>
      {/*{panel &&*/}
      {/*  <div className="password">*/}
      {/*  password*/}
      {/*  </div>*/}
      {/*}*/}
    </div>
  );
};

export default Pointer;
