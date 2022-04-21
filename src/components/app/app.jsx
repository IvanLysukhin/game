import React, {useState} from 'react';
import Map from "../Map/Map";

const DAYS = 9862;
const GAME_MODE = 'main';

const initialState = {
  days: 0,
  gameMode: GAME_MODE,
};

function App() {
  const [state, setState] = useState(initialState);

  const changeState = (mode,value) => {
    setState((prevState) => ({
      ...prevState,
      [mode]: value,
    }))
  };

  const daysInputHandler = ({target}) => {
    changeState('days', +target.value);
  };

  const firstQaSubmitClick = () => {
    if (state.days === DAYS) {
      changeState('gameMode', '');
    }
  };

  return (
    <main className="main">
      {
        state.gameMode === GAME_MODE ? (
          <div className="first-qa">
          <p>Сколько дней ты радуешь этот мир?</p>
          <input type="number" onChange={daysInputHandler}/>
          <button className="btn-1" onClick={firstQaSubmitClick}>Ответ</button>
        </div>
        ) : (
          <Map/>
        )
      }
    </main>
  );
}

export default App;
