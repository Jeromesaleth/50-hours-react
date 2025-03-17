
import React from 'react'
import { useContext } from 'react'
import { UserContext } from '../UserContext'

const UserUpdate = () => {

    const {user} = useContext(UserContext);

  return (
    <div>
        <h1>User Profile</h1>
        <p>Name : {user.name} </p>
    </div>
  )
}

export default UserUpdate