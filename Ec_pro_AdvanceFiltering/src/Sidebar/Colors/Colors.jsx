import React from 'react'
import "./Colors.css"
import Input from "../../components/Input"
const Colors = ({ handleChange }) => {
  return (
    <section className="ml">
      <h2 className="sidebar-title color-title">Colors</h2>

      <label className="sidebar-label-container">
        <input onChange={handleChange} value={""} type="radio" name='test3' /> {/* value={""} - weaare goingto be selecting everything  */}
        <span className="checkmark all"></span>All
      </label>

      <Input
        handleChange={handleChange}
        value={"black"}
        title={"Black"}
        name={"test3"}
        color={"black"}
      />

      <Input
        handleChange={handleChange}
        value={"blue"}
        title={"Blue"}
        name={"test3"}
        color={"blue"}
      />

      <Input
        handleChange={handleChange}
        value={"red"}
        title={"Red"}
        name={"test3"}
        color={"red"}
      />

      <Input
        handleChange={handleChange}
        value={"green"}
        title={"Green"}
        name={"test3"}
        color={"green"}
      />

      {/* <Input
        handleChange={handleChange}
        value={"yellow"}
        title={"Yellow"}
        name={"test3"}
        color={"yellow"}
      /> */}

{/* when the select color at the radio btn inside white round */}
      <label htmlFor="" className="sidebar-label-container">
        <input onChange={handleChange} value={"white"} type="radio" name={"test3"} /> {/* IF ANY CHNGENGES CALLIN FUNCTION -> onChange={handleChange ,controlling this component - value={value} */}
        <span className="checkmark" style={{ backgroundColor: "white", border: "2px solid black" }}></span>
        white
      </label>
    </section>
  )
}

export default Colors