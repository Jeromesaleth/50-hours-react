import React, { useContext } from 'react';
import { AgeContext, NameContext } from '../../App';


const ComponentC = () => {
  const name = useContext(NameContext);
  const age = useContext(AgeContext);

  return (
    <div>
      <h1>Component C</h1>
      <h2>Name: {name}</h2>
      <h2>Age: {age}</h2>
    </div>
  );
};

export default ComponentC;
