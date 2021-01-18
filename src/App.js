import React from 'react';
import './App.css';

function App() {

  let input = React.createRef();

  const parseData = () => {
    let inputData = input.current.value;
    let matches = inputData.toLowerCase().split(/[\n]/);
    console.log(matches);
  };

  return (
    <div className="App">
      <h1>Quiniela Report</h1>
      <div>
        <textarea 
          ref={input}
          rows={15}
          cols={40}
        />
      </div>
      <button className="analize" onClick={parseData}>
        Analyze
      </button>
    </div>
  );
}

export default App;
