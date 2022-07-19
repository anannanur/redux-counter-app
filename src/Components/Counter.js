import React from 'react';
import style from './Counter.module.css';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { decrementCounter, incrementCounter, resetCounter } from '../Services/actions/counterActions';

const Counter = () => {

    // const [count, setCount] = useState(0);
    // const handleClick = () =>{
    //     setCount(count => count+1)
    // }

    const count = useSelector(state => state.count);
    const dispatch = useDispatch();

    const handleIncrementClick = () => {
        dispatch(incrementCounter());
    }
    const handleDecrementClick = () => {
        dispatch(decrementCounter());
    }
    const handleResetClick = () => {
        dispatch(resetCounter());
    }

    return (
        <div>
            <h1 style={{color: '#E63E6D', marginBottom: '45px'}}>Count : {count}</h1>
            <button className={style.buttonClass} onClick={handleIncrementClick}>Increment</button>
            <button className={style.buttonClass} onClick={handleResetClick}>Reset</button>
            <button className={style.buttonClass} onClick={handleDecrementClick}>Decrement</button>
            
        </div>
    );
};

export default Counter;