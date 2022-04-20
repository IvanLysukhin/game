import React, {useState} from 'react';
import Pointer from "../Pointer/Pointer";
import QCard from "../QCard/QCard";

const POINTERS = [
  {
    id:1,
    questionObj:
      {
        question: 'Вопрос 1Вопрос 1Вопрос 1Вопрос 1Вопрос 1Вопрос 1Вопрос 1Вопрос 1Вопрос 1Вопрос 1 Вопрос 1Вопрос 1Вопрос 1Вопрос 1Вопрос 1Вопрос 1Вопрос 1Вопрос 1Вопрос 1Вопрос 1'
        , answer: 'Ответ'
      }
      },
  {
    id:2,
    questionObj:
      {
        question: 'Вопрос 2'
        , answer: 'Ответ'
      }
      },
  {
    id:3,
    questionObj:
      {
        question: 'Вопрос 3'
        , answer: 'Ответ'
      }
      },
  {
    id:4,
    questionObj:
      {
        question: 'Вопрос 4'
        , answer: 'Ответ'
      }
      },
  {
    id:5,
    questionObj:
      {
        question: 'Вопрос 5'
        , answer: 'Ответ'
      }
      },
  {
    id:6,
    questionObj:
      {
        question: 'Вопрос 6'
        , answer: 'Ответ'
      }
      },
];

function Map () {
  const [question, setQuestion] = useState(null);
  const [count, setCount] = useState(1);
  return (
    <div className="map">
      <img src="../../img/map.jpg" alt="map" height="550" width="400"/>
      {POINTERS.slice(0, count).map(({id, questionObj}) => <Pointer key={id} number={id} questionObj={questionObj} setQuestion={setQuestion} count={count}/>)}
      {question &&
        <QCard
          question={question?.question}
          id={question?.id}
          answer={question?.answer}
          setQuestion={setQuestion}
          setCount={setCount}
        />
      }
    </div>

  );
}

export default Map;
