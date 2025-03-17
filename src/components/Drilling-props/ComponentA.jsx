import React, { useContext } from 'react';
// ✅ Make sure the import path is correct
import { AgeContext, NameContext } from '../../App';
import ComponentB from './ComponentB';

const ComponentA = () => {
  const name = useContext(NameContext);
  const age = useContext(AgeContext);

  return (
    <div>
      <h1>Component A</h1>
      <h2>Name: {name}</h2>
      <h2>Age: {age}</h2>
      <ComponentB />
    </div>
  );
};

export default ComponentA;
