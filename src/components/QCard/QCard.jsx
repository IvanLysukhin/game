import React, {useState, useRef} from 'react';

function QCard ({question, answer, setQuestion, setCount}) {
  const inputRef = useRef();

  const answerHandler = () => {
    const userAnswer = inputRef.current.value.trim().toLowerCase()
    const correctAnswer = answer.trim().toLowerCase()
    if (userAnswer === correctAnswer) {
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
