import React from 'react';
import { Link } from 'react-router-dom'
import './Team.css';
import team from './Team.jpeg';

const Team = () => (
  <div>
        <header className="Team-header">
          <img src={team} className="Team-pic" alt="team"/>
          <h1 className="Team-title">Meet our team!</h1> 
          <nav>
            <ul> 
              <li><Link to='/App'>NextPage</Link></li>
            </ul>
          </nav>
        </header>
  </div>
)

export default Team;