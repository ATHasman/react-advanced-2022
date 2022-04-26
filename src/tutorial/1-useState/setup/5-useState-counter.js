import React, { useState } from 'react';

const UseStateCounter = () => {
  const [value, setValue] = useState(0);
  const handleReset = () => {
    setValue(0);
  };
  const complexIncrease = () => {
    // we use a syncronouse timeout so each click React gets the last state value
    setTimeout(() => {
      // setValue(value + 1);
      // * this way the previouse state value was not preserved on multiple clicks
      setValue((prevState) => {
        return prevState + 1;
        //* we pass in a callback function with prev. state value as (parameter), to update current state value
        //** this function cannot return undefined (always returns the new current state value)
        //*** this way the previouse state was preserved and updated upon each click
        // => an inner function was called and preserved the previouse value */
      });
    }, 2000);
  };
  return (
    <>
      <section style={{ margin: '4rem 0' }}>
        <h2>Regular counter</h2>
        <h1>{value}</h1>
        <button
          type='button'
          className='btn'
          onClick={() => setValue(value - 1)}
        >
          Decrease
        </button>
        <button type='button' className='btn' onClick={handleReset}>
          Reset
        </button>
        <button
          type='button'
          className='btn'
          onClick={() => setValue(value + 1)}
        >
          Increase
        </button>
      </section>
      <section style={{ margin: '4rem 0' }}>
        <h2>Complex counter</h2>
        <h1>{value}</h1>
        <button type='button' className='btn' onClick={complexIncrease}>
          Increase later
        </button>
      </section>
    </>
  );
};

export default UseStateCounter;
