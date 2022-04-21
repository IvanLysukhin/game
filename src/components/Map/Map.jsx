import React, {useState} from 'react';
import Pointer from "../Pointer/Pointer";
import QCard from "../QCard/QCard";

const POINTERS = [
  {
    id:1,
    questionObj:
      {
        question: 'Номер участка'
        , answer: '271'
      }
      },
  {
    id:2,
    questionObj:
      {
        question: 'За какую футбольную команду я заработал денег?'
        , answer: 'Надежда'
      }
      },
  {
    id:3,
    questionObj:
      {
        question: 'В каком году я в последний раз был в Армении?'
        , answer: '2013'
    , tip: '2 этаж',
      }
      },
  {
    id:4,
    questionObj:
      {
        question: 'Сколько раз слово "сука" сказал я в скит план?'
        , answer: '12' ,
        tip: 'Кухня дверка',
      }
      },
  {
    id:5,
    questionObj:
      {
        question: 'кем я хотел стать в детстве?'
        , answer: 'фокусник'
      }
      },
  {
    id:6,
    questionObj:
      {
        question: 'Где я выкурил первый кальян?'
        , answer: 'Крафт'
      }
      },
  {
    id:7,
    questionObj:
      {
        question: 'Любимый персонаж в игре Герои 3?'
        , answer: 'Тамика'
      }
      },
];

function Map () {
  //.slice(0, count)
  const [question, setQuestion] = useState(null);
  const [count, setCount] = useState(1);
  console.log(POINTERS.length)
  return (
    <div className="map">
      <img src="../../img/map.jpg" alt="map" height="550" width="400"/>
      {POINTERS.slice(0, count).map(({id, questionObj}) => <Pointer key={id} number={id} questionObj={questionObj} setQuestion={setQuestion} count={count}/>)}
      {question &&
        <QCard
          question={question?.question}
          id={question?.id}
          answer={question?.answer}
          tip={question?.tip}
          setQuestion={setQuestion}
          setCount={setCount}
        />
      }
    </div>

  );
}

export default Map;
