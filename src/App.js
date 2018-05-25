import React from 'react';
import { Link } from 'react-router-dom'
import './App.css';

const App = () => (
  <div>
     <header className="App-header">
          <h1 className="App-title">Welcome to the Summer Start-Up team site!</h1>
        </header>
        <p className="App-intro">
          Team members:
        </p>
        <p className="New-Para"> Sascha </p>
        <p className="New-Para"> Shivam </p>
        <p className="New-Para"> Ke </p>
    <body>
      <nav>
        <ul> 
          <li><Link to='/'>Back</Link></li>
        </ul>
      </nav>
    </body>
  </div>
)

export default App