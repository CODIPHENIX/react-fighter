import PlayerContainer from "./PlayerContainer";
import "../style/player.css";

export default function Player(props) {
  return (
    <PlayerContainer>
        <div className='avatar'> <img className='img' src={props.avatar} /></div>
     
      <div className='tContainer'>
        <h2 className='nom'>{props.nom}</h2>
        <div className='pv'>{props.pv}</div>
        <img className='pvHeart' src='src\assets\images\heart.png' />
      </div>
    </PlayerContainer>
  );
}
