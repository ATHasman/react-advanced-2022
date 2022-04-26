import React, { useState } from 'react';

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: 'dror',
    age: 35,
    message: 'random message',
  });

  // Also possiable to create multiple state values insted of Object state.
  const [name, setName] = useState('Dror');
  const [age, setAge] = useState(35);
  const [message, setMessage] = useState('random message');

  const changeMessage = () => {
    // setPerson({ message: 'Aloha' });
    // * this will clear all the values from the original Object
    // ** solution is to use ES6 spread operator (...obj) to spread all the Obj. key:values. and overwrite the correct message value
    // setPerson({ ...person, message: 'Aloha' });

    setMessage('Aloha');
  };
  return (
    <>
      <h3>{name}</h3>
      <h3>{age}</h3>
      <h3>{message}</h3>
      <button type='button' className='btn' onClick={changeMessage}>
        Change message
      </button>
    </>
  );
};

export default UseStateObject;
