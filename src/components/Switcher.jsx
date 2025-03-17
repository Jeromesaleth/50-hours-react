import React, { useState } from 'react'

const Switcher = () => {

  const [swit , setSwit] = useState(false);

  return (
    <section>
      { swit ? <span>Dark Mode</span> : <span>Light Mode</span> }
    <br />

    <input type="text"  key={ swit ? 'dark' : 'light'} />
    <button onClick = { () => setSwit((s) => !s )} >Swith</button>
    </section>
  )
}

export default Switcher