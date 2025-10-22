import { useState } from "react";
import Player from "./components/Player.jsx";
import Arena from "./components/arena.jsx";
import "./App.css";

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
