import React, { useState } from 'react';

//useState => a React hook that returns a stateful value and a function [value, f]
// *{named import} must be explicitly imported w. {curley-braces}
// ** useState : Returns a stateful value, and a function to update it
// *** we pass in an initial default value  => useState('default value')

const UseStateBasics = () => {
//* Component Name MUST be Uppercase otherwise an Error!!
//* Hook must be invoked inside component function or body
//*** Hook Cannot be called conditionally (see useEffect example)

  // console.log(useState('Aloha'));
  // const value = useState(18)[0];
  // const handler = useState(18)[1];
  // console.log(value,handler);

  const [text,setText] = useState('just another random title');
  //we useES6 [ array distructuring syntax]; common practice set%StateValue% 
  const handleClick = () => {
    // Toggle titles logic functionality  
    if (text === 'just another random title') {
      //* note that we invoke the handler function (returned from useState)
      // function (setText) with a new state value to be updated
      setText('Aloha People');
    }
    else {
      setText('just another random title');
      };
    }
  
  
  return (
  <React.Fragment>
    <h2>{text}</h2>
    <button type="button" className="btn" onClick={handleClick}>change title</button>
    </React.Fragment>
    );
};

export default UseStateBasics;
