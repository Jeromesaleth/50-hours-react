import React, { useEffect } from 'react'

const BasicEffect = () => {

    useEffect(() => {
        console.log('BasicEffect comonent mounted')
    } , [])

  return (
    <div>Check the console to see the message</div>
  )
}

export default BasicEffect