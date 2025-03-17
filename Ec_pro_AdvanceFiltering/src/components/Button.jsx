import React from 'react'

const Button = ({handleClick,value, title}) => {
  return (
    <div>
      <button onClick={handleClick} value={value} className='btns'>{title} </button>
    </div>
  )
}

export default Button