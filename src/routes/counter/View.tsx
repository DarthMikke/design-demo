import { useState } from "react";
import Pane from "../../components/Pane";

export default function() {
  const [counter, setCounter] = useState(5);
  return <Pane>
    <p>
      Counter: {counter}
    </p>
    <button onClick={() => {setCounter(counter + 1)}}>Increase by 1</button>
  </Pane>
}
