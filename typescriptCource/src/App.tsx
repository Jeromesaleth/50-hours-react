import React from 'react'

const App = () => {
  // Variable Declaration
  const ageCal = (a : number , b : number ) => {
return a + b;
  }
  const age = ageCal(30,46);
  console.log(age);
  
  



  return (
    <div>App</div>
  )
}

export default App 