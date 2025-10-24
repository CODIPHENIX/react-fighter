export default function Buttonattack({ onClick, buttonText }) {

    return(
        <button onClick={onClick}>
            {buttonText}
        </button>
    )
}