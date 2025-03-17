import React, { useContext, useState } from 'react'
// UserContext-இல் உள்ள updateUser function-ஐ import செய்கிறது
import { UserContext } from '../UserContext';

const UpdateUser = () => {
  // useContext Hook மூலம் updateUser function-ஐ பெறுகிறது
  const { updateUser } = useContext(UserContext);
  // useState மூலம் புதிய பெயரை சேமிக்க newName state உருவாக்கப்படுகிறது
  const [newName, setNewName] = useState('');

  // form submit செய்யும் போது வேலை செய்யும் function
  const handleSubmit = (e) => {
    e.preventDefault(); // Default behavior தடுக்கிறது

    // புதிய பெயர் காலியாக இல்லையெனில் updateUser function-ஐ அழைக்கிறது
    if (newName.trim()) {
        updateUser(newName); // Context API மூலம் பெயரை மாற்றுகிறது
        setNewName(""); // Input field-ஐ காலியாக மாற்றுகிறது
    }
  }

  return (
    <div>
        <h2>Update User Name</h2>
        {/* Form UI */}
        <form onSubmit={handleSubmit}>
            {/* Input field (புதிய பெயரை வரையறுக்க) */}
            <input 
              type="text" 
              value={newName} 
              onChange={(e) => setNewName(e.target.value)} 
              placeholder='Enter new name'
            />
            {/* Update button */}
            <button type='submit'>Update</button>
        </form>
    </div>
  )
}

export default UpdateUser
