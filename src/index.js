import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

// 홈화면 렌더링
import Home from './commpnent/home/home.js';

// 고민작성 화면 렌더링
import Write from './commpnent/write/write.js';

// 통계 화면 렌더링
import Graph from './commpnent/graph/graph.js';

// 쓰레기보관함 화면 렌더링
import Record from './commpnent/record/record.js';

const App = () => {
    const [activeComponent, setActiveComponent] = useState('Home');
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleButtonClick = (component) => {
        setActiveComponent(component);
    };

    const renderComponent = () => {
        switch (activeComponent) {
            case 'Home':
                return <Home />;
            case 'Write':
                return <Write />;
            case 'Graph':
                return <Graph />;
            case 'Record':
                return <Record />;
            default:
                return <Home />;
        }
    };

    return (
        <React.StrictMode>
            <div>
                <nav>
                    <div className="Button-back" style={ isModalOpen ?  {filter: 'blur(10px)'} : {filter: 'none'}}>
                        <button
                            className={`Slide-btn ${activeComponent === 'Home' ? 'active' : ''}`}
                            style={{ backgroundColor: `${activeComponent === 'Home' ? '#ffffff50' : ''}` }}
                            onClick={() => handleButtonClick('Home')}
                        >
                            홈
                        </button>
                        <button
                            className={`Slide-btn Trash-btn ${activeComponent === 'Record' ? 'active' : ''}`}
                            style={{ backgroundColor: `${activeComponent === 'Record' ? '#ffffff50' : ''}` }}
                            onClick={() => handleButtonClick('Record')}
                        >
                            쓰레기 보관함
                        </button>
                        <button
                            className={`Slide-btn Statistics-btn ${activeComponent === 'Graph' ? 'active' : ''}`}
                            style={{ backgroundColor: `${activeComponent === 'Graph' ? '#ffffff50' : ''}` }}
                            onClick={() => handleButtonClick('Graph')}
                        >
                            통계
                        </button>
                    </div>
                </nav>
                { renderComponent() }
            </div>
        </React.StrictMode>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
