import React from 'react'

const Copy = () => {

  console.log("stop staling my content");
  
  return (
    <p onCopy={Copy} >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae praesentium, odio incidunt dicta ratione eius vitae eaque eum totam reiciendis natus enim excepturi numquam sit provident id error quia laboriosam.
    </p>
  )
}

const App = () => {
  return (
    <div>
      <Copy />
    </div>
  )
}

export default App
