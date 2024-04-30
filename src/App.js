import "./App.css";
import { useState } from "react";

const rulesText = [
  "Use className instead of class in element attributes",
  "All tags MUST be closed (have their pair somewhere), you can shorthand a closed pair like so <br/>",
  "This code is expected to run in the browser* we just use node to compile it. It's javascript but it's not node. You can't install any library but you can many.",
  "*Server side rendering (like in nextjs) will let us combine the two AND sort of use backend stuff and frontend stuff in the same project",
];

const SuperListItem = (props) => {
  const [checked, setChecked] = useState(false);

  return (
    <>
      <li>
        {checked?<s>{props.itemText}</s>:props.itemText} 
        <input
          type="checkbox"
          value={checked}
          onChange={() => {
            setChecked(!checked);
          }}
        ></input>
      </li>
    </>
  );
};

function App() {
  return (
    <div className="App">
      This is just regular HTML except you can throw in js when you want:
      <br />
      {new Date().toISOString()}
      <br />
      Some extra rules:
      <ul>
        {rulesText.map((r) => (
          <SuperListItem itemText={r} />
        ))}
      </ul>
    </div>
  );
}

export default App;
