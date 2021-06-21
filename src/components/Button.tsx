import { useState } from "react";

export function Button() {
  const [counter, setCounter] = useState(0);

  function increase() {
    setCounter(counter + 1)  
  }
  return (
    <button onClick={ increase }>
      { counter }
    </button>
  )
}
