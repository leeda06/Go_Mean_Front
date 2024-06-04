import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';

import Record from './commpnent/record/record';
import Graph from './commpnent/graph/graph';

const App = () => {
  const [activeComponent, setActiveComponent] = useState('Graph');

  const handleButtonClick = (component) => {
    setActiveComponent(component);
  };

  return (
    <React.StrictMode>
      {activeComponent === 'Record' ? <Record /> : <Graph />}
      <nav>
        <div className="Button-back">
          <button className={`slide-btn`}>홈</button>
          <button
            className={`slide-btn Trash-btn ${activeComponent === 'Record' ? 'active' : ''}`}
            style={{ backgroundColor: `${activeComponent === 'Record' ? '#ffffff50' : ''}` }}
            onClick={() => handleButtonClick('Record')}
          >
            쓰레기 보관함
          </button>
          <button
            className={`slide-btn Statistics-btn ${activeComponent === 'Graph' ? 'active' : ''}`}
            style={{ backgroundColor: `${activeComponent === 'Graph' ? '#ffffff50' : ''}` }}
            onClick={() => handleButtonClick('Graph')}
          >
            통계
          </button>
        </div>
      </nav>
    </React.StrictMode>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
