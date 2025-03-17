import React from 'react'

/* Reused cInput Component */

const Input = ({handleChange, value, title, name, color}) => {
  return (
    <div>
      <label htmlFor="" className="sidebar-label-container">
        <input onChange={handleChange} value={value} type="radio" name={name} /> {/* IF ANY CHNGENGES CALLIN FUNCTION -> onChange={handleChange ,c0ntrolling this component - value={value} */}
        <span className="checkmark" style={{backgroundColor : color}}></span> 
        {title}
      </label>
    </div>
  )
}

export default Input