import PlayerContainer from "./PlayerContainer";
import "../style/player.css";

export default function Player(props) {
  return (
    <PlayerContainer>
      <img className="avatar" src={props.avatar}/>
      <h1 className='nom'>{props.nom}</h1>
      <div>{props.pv}</div>
    </PlayerContainer>
  );
}
