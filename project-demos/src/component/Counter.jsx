import React, { useState } from 'react'
import "../style/style.css"

const Counter = () => {

    const [count , setCount ] = useState(0);

    const increment = () => {
        setCount( () => count + 1)
    }

    const decrement = () => {
        setCount( () => count - 1)
    }

  return (
    <section>
        <h1 className='number' >{count}</h1>
        <button onClick={increment} className='increment m' > + </button>
        <button onClick={decrement} className='decrement' > - </button>

    </section>

  )
}

export default Counter