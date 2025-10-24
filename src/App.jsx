
import Buttonattack from './components/Buttonattack'
import { useState } from "react";
import Player from "./components/Player.jsx";
import Arena from "./components/arena.jsx";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Wrapper from './components/layout/wrapper'
import Titre from './components/Titre'
import Turn from './components/Turn'


function App() {
  const [players, setPlayerPv] = useState([
    {
      nom: "Scorpion",
      avatar: "src/assets/images/scorpionP1.png",
      pv: 5,
      bgImg: "",
    },
    {
      nom: "Sub-Zero",
      avatar: "src/assets/images/subzeroP2.webp",
      pv: 5,
      bgImg: "",
    },
  ]);

  const [count, setCount] = useState(0)

  return (
    <>
      <Arena>
        {players.map((player, index) => (
          <Player
            key={index}
            nom={player.nom}
            avatar={player.avatar}
            pv={player.pv}
          />
        ))}
      </Arena>
      
      <p>{players[count].nom}'s turn</p>
      
      <Buttonattack onClick={() => {
          setCount((count + 1) % 2);
          setPlayer(prevPlayers => {
            const newPlayers = [...prevPlayers]; 
            newPlayers[(count + 1) % 2] = { ...newPlayers[(count + 1) % 2], pv: newPlayers[(count + 1) % 2].pv - 1 };
            return newPlayers;
          });
        }}
        buttonText="Attack" />
      
    <Titre titre='REACT ATTACT'/>
    <Wrapper>
      <Turn turn='put the turns here'/>
    </Wrapper>
    </>
  );
}

export default App;


