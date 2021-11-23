import React, { useState } from 'react'
import ValidatePin from './ValidatePin/Index'
import PersistentBugger from './PersistentBugger/Index'

const App = () => {

  const [view, setView] = useState(2)
  const onSelect = ( active ) => setView( active );
  return (
    <div className="container pt-3">
      <h1 > Prueba solucion factible </h1>
      <hr />
      <ul className="nav">
        <li className="nav-item">
          <a className="nav-link" onClick={()=>onSelect(1)}> Validate Pin </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" onClick={()=>onSelect(2)}> Persistent Bugger </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" onClick={()=>onSelect(3)}> Find the missing letter </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" onClick={()=>onSelect(4)}> Array.diff </a>
        </li>
      </ul>
      <div className="content" className="container">
        { view === 1 && <ValidatePin />}
        { view === 2 && <PersistentBugger />}
        { view === 3 && <ValidatePin />}
        { view === 4 && <ValidatePin />}
      </div>
    </div>
  );
}

export default App;
