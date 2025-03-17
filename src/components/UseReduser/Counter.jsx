import React, { useReducer, useState } from 'react';
import {counterReduser , initialState } from './countReduser'; /* import usereduse functional component */

const Counter = () => {

    const [state , dispatch ] = useReducer(counterReduser , initialState);
    const [inputValue , setInputValue ] = useState(0)

const handleIncrement = () => dispatch({type : 'increment'});
const handleDecrement = () => dispatch({type : 'decrement'})

const handleIncrementByAmount = () => {
    dispatch( {type : "incrementByAmount" , payload : Number(inputValue) } ); /* Number(inputValue) - convert value in number  */
    setInputValue(0);
}

const handleDecrementByAmount = () => {
    dispatch ({ type : "decrementByAmount" , payload : +inputValue}) /* another way of convert value */
    setInputValue(0);
}

  return (
    <div>
        <h2>Count : {state.count} </h2>
        <button onClick={handleIncrement} >Increment</button>
        <button onClick={handleDecrement}  >Decrement</button>
       
       <div className="">
            <input type="number" value={inputValue} onChange={ e => setInputValue(e.target.value)} />
            <button onClick={handleIncrementByAmount} >Add</button>
            <button onClick={handleDecrementByAmount} >Subtract</button>
       </div>
    </div>
  )
}

export default Counter