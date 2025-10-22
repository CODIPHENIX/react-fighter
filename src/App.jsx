
import Buttonattack from './components/Buttonattack'
import { useState } from "react";
import Player from "./components/Player.jsx";
import Arena from "./components/arena.jsx";
import "./App.css";


function App() {
  const [players, setPlayer] = useState([
    {
      nom: "Scorpion",
      avatar: "src/assets/images/scorpionP1.png",
      pv: 5,
    },
    {
      nom: "Sub-Zero",
      avatar: "src/assets/images/subzeroP2.webp",
      pv: 5,
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
      
    </>
  );
}

export default App;


