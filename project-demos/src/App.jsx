import React from 'react'
import Counter from './component/Counter'
import Todo from './component/Todo'
import Meals from './component/Meals'
import Calculater from './component/Calculater'
import ToggleBackgroundcolor from './component/ToggleBackgroundcolor'
import HiddenSearchbar from './component/HiddenSearchbar'
import Testimonials from './component/Testimonials'
import Accordion from './component/Accordion'
import { accordionData } from './Utils/Content'
import Form from './component/Form'

const App = () => {
  return (
    <div>
      {/* <Counter /> <br /> */}
      {/* <Todo />  */}
      {/* <Meals /> */}
      {/* <Calculater /> */}
      {/* <ToggleBackgroundcolor /> */}
      {/* <HiddenSearchbar /> */}
      {/* <Testimonials /> */}

     {/* <div className="accordion">
      {accordionData.map(({title , content }) => (
        <Accordion title = {title} content = {content} />
      ))}
     </div> */}

     <Form />
    </div>
  )
}

export default App