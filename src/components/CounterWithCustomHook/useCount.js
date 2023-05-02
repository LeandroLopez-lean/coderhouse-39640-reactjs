import { useState } from 'react';

const useCount = () => {
  const [counter, setCount] = useState(0);

  const increment = () => {
    setCount(counter + 1);
  };

  const decrement = () => {
    if(decrement >0){
    setCount(counter - 1);
    console.log(decrement);
  }
  };

  const reset = () => {
    setCount(0);
  };

  return {
    counter,
    increment,
    decrement,
    reset
  };
}

export default useCount;