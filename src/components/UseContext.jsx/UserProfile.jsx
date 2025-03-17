import React, { useContext } from 'react'
// UserContext-இல் உள்ள தகவலை import செய்கிறது
import { UserContext } from '../UserContext'

const UserProfile = () => {
  // useContext Hook மூலம் user state-ஐ பெறுகிறது
  const { user } = useContext(UserContext);

  return (
    <div>
        <h1>User Profile</h1>
        {/* user.name-ஐ திரையில் காட்டுகிறது */}
        <p>Name: {user.name}</p>
    </div>
  )
}

export default UserProfile
