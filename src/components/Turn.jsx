import "../styles/Turn.css";
export default function Turn(props){
    return <div className='turn'>
                <p>{props.turn}</p>
            </div>;
}