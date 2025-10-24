import Buttonattack from './components/Buttonattack'
import { useState } from "react";
import Arena from "./components/arena.jsx";
import './App.css'
import Wrapper from './components/layout/wrapper'
import Titre from './components/Titre'
import Turn from './components/Turn'
import { handleAttack } from './utils/js/attackLogic';
import playerData from './data/players.json';

function App() {
  const [players, setPlayerPv] = useState(playerData);
  const [count, setCount] = useState(0);
  const [winner, setWinner] = useState(null); 

  const handleAttackClick = () => {
    const gameWinner = handleAttack(players, count, setCount, setPlayerPv);
    if (gameWinner) {
      setWinner(gameWinner);
    }
  };

  return (
    <>
      <Titre titre='REACT ATTACK' />
      <Wrapper>
        <Turn currentPlayer={players[count].nom} />
        <Arena players={players} />

        {players[0].pv == 0 || players[1].pv == 0 ? (
          <h2 className='winner-announcement'>{winner} wins!</h2>   
        ) : (
          <Buttonattack
            onClick={handleAttackClick}
            buttonText="Attack"
          />
        )}
        
      </Wrapper>
    </>
  );
}

export default App;
