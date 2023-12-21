import { useState } from "react";

const Counter = () => {
  const [currentCount, setCurrentCount] = useState(0);

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
      <h1>
        <span>My Counter App</span>
      </h1>

      <p>Current Count: {currentCount}</p>
      <button id="increment-btn" onClick={handleIncrement}>
        Increment
      </button>
      <button id="decrement-btn" onClick={handleDecrement}>
        Decrement
      </button>
    </div>
  );
};

export default Counter;
