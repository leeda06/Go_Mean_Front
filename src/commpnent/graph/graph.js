// src/App.js
import React from 'react';
import '../../css/graph.css';
import BarGraph from './barGraph.js';

// 범례 항목 정의
const legendItems = [
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
  return (
    <div className="app-container">
      <div className="graph-container">
        <BarGraph values={values} legendItems={legendItems} />
      </div>
    </div>
  );
};

export default App;
