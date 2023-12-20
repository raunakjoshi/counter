import React, { useState } from "react";

const Counter = ({ count }) => {
  const [currentCount, setCurrentCount] = useState(count);

  const handleIncrement = () => {
    if (currentCount < 20) {
      setCurrentCount(currentCount + 1);
    }
  };

  const handleDecrement = () => {
    if (currentCount > 0) {
      setCurrentCount(currentCount - 1);
    }
  };

  return (
    <div>
      <p>Current Count: {currentCount}</p>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
};

export default Counter;
