import React,{useState} from "react";

function Home() {
    const [name, setname] = useState('ashish')
    function clickme(params) {
        setname('abhi')
        alert(name)
    }
  return (
    <div className="App">
        <h1>{name}</h1>
      <button onClick={() => clickme()}>click me</button>
    </div>
  );
}

export default Home;
