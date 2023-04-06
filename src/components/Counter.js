import React, { useState, useEffect } from 'react';

const Counter = () => {    
  const [count, setCount] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount(count => count + 1);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);
  const handleIncrement = () => {
    setCount(count => count + 1);
  }

  const handleDecrement = () => {
    setCount(count => count - 1);
  }
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleIncrement}>Incrementar</button>
      <button onClick={handleDecrement}>Decrementar</button>
    </div>
  );
}
export default Counter
