import React from 'react'
import Category from './Category/Category';
import Colors from './Colors/Colors'
import Price from './Price/Price';
import "./Sidebar.css";

const Sidebar = ({handleChange}) => {
  console.log(handleChange);
  
  return (
    <div>
      <section className="sidebar">
        <div className="logo-container">
          <h1>🛒</h1>
        </div>

        <Category handleChange = {handleChange}  /> {/* Available handleChange() function in this component */}
        <Price handleChange = {handleChange}  />
        <Colors handleChange = {handleChange}  />
        
      </section>
    </div>
  )
}

export default Sidebar