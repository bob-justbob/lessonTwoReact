
import { useState } from 'react';
import './App.css';
import Counter from './components/Counter';

function App() {
  const [change, setchange] = useState(0);

  const [start, setstart] = useState();


  return (
    <div className="App">

      <input typeof='number' placeholder='Type Number' value={change} onChange={(e)=>{
        setchange(e.target.value)
      }}/>
      <button onClick={()=> setstart(change)}>Change Number</button>
        {
          start && <Counter start={start}/>
        }
      
      <Counter   increse={10} decrese={10} />
      <Counter start={75}  increse={15} decrese={15}/>
    </div>
  );
}

export default App;
