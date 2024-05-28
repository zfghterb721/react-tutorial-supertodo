import "./App.css";
import { useState } from "react";

const rulesText = [
  "Use className instead of class in element attributes",
  "All tags MUST be closed (have their pair somewhere), you can shorthand a closed pair like so <br/>",
  "This code is expected to run in the browser* we just use node to compile it. It's javascript but it's not node. You can't install any library but you can many.",
  "*Server side rendering (like in nextjs) will let us combine the two AND sort of use backend stuff and frontend stuff in the same project",
];

const SuperListItem = (props) => {
  //really just a getter and a setter
  const [checked, setChecked] = useState(false);

  const [checked2, setChecked2] = useState(false);

  return (
    <>
      <li>
            
        {checked ? <s>{props.itemText}</s> : checked2 ? <b style={{color: "red"}}>{props.itemText}</b> : props.itemText}
        <input
          onChange={() => {
            setChecked(!checked);       
            if(checked) setChecked2(false);
          }}
          type="checkbox"
          checked={checked}          
        ></input>

        <input
          onChange={() => {
            setChecked2(!checked2); 
            if(checked2) setChecked(false);
          }}
          type="checkbox"
          checked={checked2}
          
        ></input>
        
        <button onClick={() => props.deleteItem()}>Delete</button>
      </li>
    </>
  );
};

function App() {
  const [newItemInput, setNewItemInput] = useState("");
  const [list, setList] = useState(rulesText);

  function deleteItem(index) {
    return function () {
      console.log("delete", index);
      const newList = list.filter((item, i) => i !== index);
      setList(newList);
    };
  }

  return (
    <div className="App">
      This is just regular HTML except you can throw in js when you want:
      <br />
      {new Date().toISOString()}
      <br />
      Some extra rules:
      <ul>
        {list.map((r, i) => (
          <SuperListItem itemText={r} deleteItem={deleteItem(i)} />
        ))}
      </ul>
      <form>
        <input
          type="text"
          value={newItemInput}
          onChange={(e) => setNewItemInput(e.target.value)}
        ></input>
        <button
          onClick={(e) => {
            e.preventDefault(); //do this so the webpage doesn't try to submit the form oldschool
            setList([...list, newItemInput]);
            setNewItemInput("");
          }}
        >
          Add To Do
        </button>
      </form>
    </div>
  );
}

export default App;
