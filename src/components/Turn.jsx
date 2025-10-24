import "../utils/styles/turn.css";
export default function Turn(props){
    return <div className='turn'>
                <p>{props.currentPlayer}'s turn</p>
            </div>;
}