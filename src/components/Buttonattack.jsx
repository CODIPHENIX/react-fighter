export default function Buttonattack({ onClick, buttonText }) {

    return(
        <button onClick={onClick} className="button-attack">
            {buttonText}
        </button>
    )
}