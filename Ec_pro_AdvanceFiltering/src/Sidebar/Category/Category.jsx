// import React from 'react'
// import "./Category.css";
// import Input from '../../components/Input';

// const Category = () => {
//   return (
//     <section>
//       <h2 className="sidebar-title">Category</h2>

//       <div className="line">

// <Input />
// <Input />
// <Input />
// <Input />

//       </div>
//     </section>
//   )
// }

// export default Category

import React from 'react'
import "./Category.css";
import Input from '../../components/Input';

const Category = ({ handleChange }) => {
  return (
    <section >
      <h2 className="sidebar-title">Category</h2>

      <div className="line">
        <label className="sidebar-label-container">
          <input onChange={handleChange} value={""} type="radio" name='test' /> {/* value={""} - weaare goingto be selecting everything  */}
          <span className="checkmark"></span>All
        </label>

        <Input
          handleChange={handleChange}
          value={"sneakers"}
          title={"Sneakers"}
          name={"test"}
        />

        <Input
          handleChange={handleChange}
          value={"flats"}
          title={"Flats"}
          name={"test"}
        />

        <Input
          handleChange={handleChange}
          value={"sandals"}
          title={"Sandals"}
          name={"test"}
        />

        <Input
          handleChange={handleChange}
          value={"heels"}
          title={"Heels"}
          name={"test"}
        />

      </div>
    </section>
  )
}

export default Category