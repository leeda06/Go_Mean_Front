// src/App.js
import React, { useState } from 'react';
import '../../css/graph.css';
import BarGraph from './barGraph.js';
import '../../components/graph/barGraph.js'
// 값 이름 , 색, 이미지 , class이름 , 그래프 크기 (개수)
const legendItems = [
    { category: '건강', color: '연두색', gif: require('../../img/substract/Substract_green.png'), className: 'green', values: 160 },
    { category: '금전', color: '노랑색', gif: require('../../img/substract/Substract_yellow.png'), className: 'yellow', values: 120 },
    { category: '개인', color: '흰색', gif: require('../../img/substract/Substract_white.png'), className: 'white', values: 60 },
    { category: '인간관계', color: '분홍색', gif: require('../../img/substract/Substract_pink.png'), className: 'pink', values: 90 },
    { category: '취업', color: '보라색', gif: require('../../img/substract/Substract_purple.png'), className: 'purple', values: 150 },
    { category: '학업', color: '파란색', gif: require('../../img/substract/Substract_blue.png'), className: 'blue', values: 100 }
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
        </div>
    );
};

export default App;
