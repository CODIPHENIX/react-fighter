import "../../utils/styles/wrapper.css";

export default function Wrapper(props){
    return <div className='wrapper'>
            {props.children}
           </div>
    ;
}