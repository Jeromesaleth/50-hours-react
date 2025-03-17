import React, { useContext } from 'react';
import { AgeContext, NameContext } from '../../App';
import ComponentC from './ComponentC';

const ComponentB = () => {
  const name = useContext(NameContext);
  const age = useContext(AgeContext);

  return (
    <div>
      <h1>Component B</h1>
      <h2>Name: {name}</h2>
      <h2>Age: {age}</h2>
      <ComponentC />
    </div>
  );
};

export default ComponentB;
