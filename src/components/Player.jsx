import PlayerContainer from "./PlayerContainer";
import "../style/player.css";

export default function Player(props) {
  return (
    <PlayerContainer>
      <img className='avatar' src={props.avatar} />
      <div className='tContainer'>
        <h1 className='nom'>{props.nom}</h1>
        <div className='pv'>{props.pv}</div>
        <img className='pvHeart' src='src\assets\images\heart.png' />
      </div>
    </PlayerContainer>
  );
}
