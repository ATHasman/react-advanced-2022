import React from 'react';
import { data } from '../../../data';

const UseStateArray = () => {
  const [people, setPeople] = React.useState(data);
  // *Another option to use hooks without the need to import from react
  // **while iterating the Array items and rendering dynamically
  //   a unique 'key' value is required as attr. to JSX element

  const removeItem = (id) => {
    let newPeople = people.filter((person) => person.id !== id);
    // filter out all the people who's id matches the id parameter into a new array
    setPeople(newPeople);
  };
  return (
    <>
      {people.map((person) => {
        const { id, name } = person;
        // ES6 object destructuring syntax
        return (
          <div key={id} className='item'>
            {/* unique key required */}
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>remove</button>
          </div>
        );
      })}
      <button type='button' className='btn' onClick={() => setPeople([])}>
        Clear items
      </button>
      {/* explicitly invoke the onClick event inline function setState handler directly *  using an arrow ()=> func. since we want it to invoke only onClick event */}
    </>
  );
};

export default UseStateArray;
