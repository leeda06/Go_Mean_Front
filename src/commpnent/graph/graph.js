// src/App.js
import React, { useState } from 'react';
import '../../css/graph.css';
import BarGraph from './barGraph.js';

// 범례 항목 정의
const legendItems = [
    { category: '건강', color: '연두색', gif: require('../../img/substract/Substract_green.png'), className: 'green', values: 160 },
    { category: '금전', color: '노랑색', gif: require('../../img/substract/Substract_yellow.png'), className: 'yellow', values: 120 },
    { category: '개인', color: '흰색', gif: require('../../img/substract/Substract_white.png'), className: 'white', values: 60 },
    { category: '인간관계', color: '분홍색', gif: require('../../img/substract/Substract_pink.png'), className: 'pink', values: 90 },
    { category: '취업', color: '보라색', gif: require('../../img/substract/Substract_purple.png'), className: 'purple', values: 150 },
    { category: '학업', color: '파란색', gif: require('../../img/substract/Substract_blue.png'), className: 'blue', values: 100 },
    { category: '건강', color: '연두색', gif: require('../../img/gif/Substract_green.gif'), className: 'green', values: 160 },
    { category: '금전', color: '노랑색', gif: require('../../img/gif/Substract_yellow.gif'), className: 'yellow', values: 120 },
    { category: '개인', color: '흰색', gif: require('../../img/gif/Substract_white.gif'), className: 'white', values: 60 },
    { category: '인간관계', color: '분홍색', gif: require('../../img/gif/Substract_pink.gif'), className: 'pink', values: 90 },
    { category: '취업', color: '보라색', gif: require('../../img/gif/Substract_purple.gif'), className: 'purple', values: 150 },
    { category: '학업', color: '파란색', gif: require('../../img/gif/Substract_blue.gif'), className: 'blue', values: 100 },
];

// 예제 사용법
const values = legendItems.map(item => item.values); // legendItems에서 값을 추출

const App = () => {
    const [activeComponent, setActiveComponent] = useState('Graph');

    const handleButtonClick = component => {
        setActiveComponent(component);
    };

    return (
        <div className="app-container">
            <div className="graph-container">
                <BarGraph values={values} legendItems={legendItems} />
            </div>

            <nav>
                <div className="Button-back">
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
        </div>
    );
};

export default App;
