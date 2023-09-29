import { useState } from "react";
import Pane from "../../components/Pane";

export default function() {
  const [counter, setCounter] = useState(5);
  return <Pane>
    <p>
      Counter: {counter}
    </p>
    <button className={"button primary"} onClick={() => {setCounter(counter + 1)}}>Increase by 1</button>
    <button className={"button destructive"} onClick={() => {setCounter(counter - 1)}}>Decrease by 1</button>
    <button className={"button secondary"}>Just a button.</button>
  </Pane>
}
