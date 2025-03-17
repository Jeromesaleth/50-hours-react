import { createContext, useState } from "react"; 

// Context உருவாக்கப்படுகிறது
const UserContext = createContext();

const UserProvider = ({ children }) => {
  // useState மூலம் user state-ஐ உருவாக்குகிறது (ஆரம்ப நிலையில் "Jerome Saleth")
  const [user, setUser] = useState({ name: "Jerome Saleth" });

  // updateUser function மூலம் பெயரை மாற்றலாம்
  const updateUser = (newName) => {
    setUser({ name: newName });
  };

  return (
    // UserContext.Provider மூலம் user state மற்றும் updateUser function-ஐ வழங்குகிறது
    <UserContext.Provider value={{ user, updateUser }}>
      {children}  {/* Context data-ஐ அனைத்து children components-களுக்கும் அனுப்புகிறது */}
    </UserContext.Provider>
  );
};

// Context மற்றும் Provider-ஐ export செய்கிறது
export { UserContext, UserProvider };
