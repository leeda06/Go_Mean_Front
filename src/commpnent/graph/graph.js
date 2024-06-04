import React from 'react';
import "../../css/graph.css"

// 그래프에 사용될 이미지 파일들을 불러오기
import Sub_green from '../../img/substract/Substract_green.png';
import Sub_yellow from '../../img/substract/Substract_yellow.png';
import Sub_white from '../../img/substract/Substract_white.png';
import Sub_pink from '../../img/substract/Substract_pink.png';
import Sub_purple from '../../img/substract/Substract_purple.png';
import Sub_blue from '../../img/substract/Substract_blue.png';

// 그래프 항목 정의
const legendItems = [
  { category: '건강', color: '연두색', gif: Sub_green, className: 'green', values: 80 },
  { category: '금전', color: '노랑색', gif: Sub_yellow, className: 'yellow', values: 120 },
  { category: '개인', color: '흰색', gif: Sub_white, className: 'white', values: 60 },
  { category: '인간관계', color: '분홍색', gif: Sub_pink, className: 'pink', values: 90 },
  { category: '취업', color: '보라색', gif: Sub_purple, className: 'purple', values: 150 },
  { category: '학업', color: '파란색', gif: Sub_blue, className: 'blue', values: 100 },
];

// 바 그래프 컴포넌트 정의
const BarGraph = ({ values }) => {
  // 값 배열에서 최대값 찾기
  const maxValue = Math.max(...values);

  return (
    <div className="bar-graph-container">
      {/* 바 그래프 컨테이너 */}
      <div className="bar-container">
        {values.map((value, index) => (
          <div key={index} className={`bar-item`}>
            {/* 바 */}
            <div className={`bar ${legendItems[index].className}`} style={{ height: `${(value / maxValue) * 50}vh` }}>
              {/* 이미지(gif) */}
              <img src={legendItems[index].gif} alt={`Image ${index}`} style={{ bottom: `${(value / maxValue) * 52}vh` }} className="bar-image" />
            </div>
          </div>
        ))}
      </div>
      {/* 범례 컨테이너 */}
      <div className="legend-container">
        {legendItems.map((item, index) => (
          <span key={index} className="legend-item" style={{ color: item.color }}>{item.category} : {item.color}</span>
        ))}
      </div>
    </div>
  );
};

// 예제 사용법
const values = legendItems.map(item => item.values); // legendItems에서 값을 추출

const App = () => {
  return (
    <div className="app-container">
      <div className="graph-container">
        <BarGraph values={values} />
      </div>
    </div>
  );
};

export default App;
