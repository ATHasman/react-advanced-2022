import React from 'react';

// React does not re-render dynamically in JSX event if we change the variable value
// We have no way to preserve the new values between rendering
// useState hook keeps the value and triggers re-rendering

const ErrorExample = () => {
  let title = 'random title';
  const handleClick = () => {
    title = 'Aloha people';
    console.log(title);
  };

  return (
    <React.Fragment>
      <h2>{title}</h2>
      <button type='button' className='btn' onClick={handleClick}>
        Change Title
      </button>
    </React.Fragment>
  );
};

export default ErrorExample;
