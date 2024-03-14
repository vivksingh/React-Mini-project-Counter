import {useState} from 'react'
import './styles.css';

function Counter(){
    const[value, setValue] = useState(0);
    let curvalue = value;

    const decrement = () => {
        setValue(curvalue - 1);
    }
    const reset = () => {
        setValue(0);
    }
    const increment = () => {
        setValue(curvalue + 1);
    }

    return(
        <>
            <div className = "screen-container">
                <div className = "screen">
                    <p className = "screen-text">{value}</p>
                </div>
            </div>

            <div className = "button-container">
            <button className = "decrement button " onClick={decrement} > Decrement </button>
            <button className = "reset button " onClick={reset}> Reset </button>
            <button className = "increment button " onClick={increment} > Increment </button>
            </div>
        </>
    );
}
export default Counter;