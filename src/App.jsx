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
    </>
  );
}

export default App;
