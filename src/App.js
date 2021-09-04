import './App.css';
import Container from './components/Container';
import { useRef, useState } from 'react'

function App() {
  const [search, setsearch] = useState("omkar787")
  const input = useRef("")

  function onClickHandle(event) {
    const temp = input.current.value
    if (temp !== "") {
      setsearch(temp)
    }
    
  }

  function onEnterHandle(event) {
    if (event.key === "Enter") {
      onClickHandle()
      console.log(event.key);
    }

  }
  return (
    <div className="app">
      <div>
        <input className="input-field" onKeyPress={onEnterHandle} ref={input} type="text" placeholder="Enter a text" />
        <button className="btn" onClick={onClickHandle} >Search</button>
      </div>
      <Container search={search} />
    </div>
  );
}

export default App;
