import React, {useState, useRef} from 'react';

function QCard ({question, answer, setQuestion, setCount}) {
  const inputRef = useRef();

  const answerHandler = () => {
    if (inputRef.current.value === answer) {
      setCount((prev) => {
        prev += 1;
        return prev;
      })

      setQuestion(null);
    }

  };

  return (
   <div className="card">
     <p>{question}</p>
     <input type="text" ref={inputRef}/>
     <button onClick={answerHandler}>Дальше</button>
   </div>
  );
}

export default QCard;
