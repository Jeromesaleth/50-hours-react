import React from 'react'
import "./Price.css"
import Input from '../../components/Input'
const Price = ({ handleChange }) => {
  // console.log(handleChange); //check working function in props

  return (
    <section className="ml">
      <h2 className="sidebar-title price-title">Price</h2>
   
      <label className="sidebar-label-container">
          <input onChange={handleChange} value={""} type="radio" name='test2' /> {/* value={""} - weaare goingto be selecting everything  */}
          <span className="checkmark"></span>All
        </label>

        <Input
          handleChange={handleChange}
          value={50}
          title={"R.S 0 - 50"}
          name={"test2"}
        />
            <Input
          handleChange={handleChange}
          value={100}
          title={"R.S 50 - 100"}
          name={"test2"}
        />
            <Input
          handleChange={handleChange}
          value={150}
          title={"R.S 100 - 150"}
          name={"test2"}
        />
            <Input
          handleChange={handleChange}
          value={200}
          title={"Over R.S 150"}
          name={"test2"}
        />
    </section>
  )
}

export default Price