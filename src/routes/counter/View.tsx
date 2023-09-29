import { useState } from "react";
import Pane from "../../components/Pane";
import Dropdown from "../../components/Dropdown";

export default function() {
  const [counter, setCounter] = useState(5);
  return <Pane>
    <p>
      Counter: {counter}
    </p>
    <button className={"button primary"} onClick={() => {setCounter(counter + 1)}}>Increase by 1</button>
    <button className={"button destructive"} onClick={() => {setCounter(counter - 1)}}>Decrease by 1</button>
    <Dropdown type={"secondary"} title={"Other options"}>
      <button onClick={() => {setCounter(5)}}>Reset</button>
      <button onClick={() => {setCounter(counter + 10)}}>Increase by 10</button>
      <button onClick={() => {setCounter(counter - 10)}}>Decrease by 10</button>
    </Dropdown>
  </Pane>
}
