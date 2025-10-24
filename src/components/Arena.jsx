import "../utils/styles/arena.css"
import Player from "./Player";

export default function Arena(props) {
  return <div className='arena'>
        {props.players.map((player, index) => (
        <Player
          key={index}
          nom={player.nom}
          avatar={player.avatar}
          pv={player.pv}
        />
      ))}
  </div>;
}
