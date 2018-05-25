import React from 'react';
import { Link } from 'react-router-dom'
import './Team.css';
import team from './Team.jpeg';

const Team = () => (
  <div>
        <header className="Team-header">
          <Link to="/App">
            <button type="button">
              <img src={team} className="Team-pic" alt="team"/>
              <p>Click the picture!</p>
            </button>
          </Link>
          <h1 className="Team-title">Meet our team!</h1> 
        </header>
  </div>
)

export default Team;