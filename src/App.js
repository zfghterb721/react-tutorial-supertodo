import './App.css';

function App() {
  return (
    <div className="App">
      This is just regular HTML except you can throw in js when you want:
      <br/>
      {new Date().toISOString(0)}
      <br/>
      Some extra rules:
      <ul>
        <li>Use className instead of class in element attributes</li>
        <li>All tags MUST be closed (have their pair somewhere), you can shorthand a closed pair like so {"<br/>"}</li>
        <li>This code is expected to run in the browser* we just use node to compile it. It's javascript but it's not node. You can't install any library but you can many.</li>
        <li>*Server side rendering (like in nextjs) will let us combine the two AND sort of use backend stuff and frontend stuff in the same project</li>
      </ul>
    </div>
  );
}

export default App;
