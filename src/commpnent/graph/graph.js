import React from 'react';
import "../../css/graph.css"

import Sub_green from '../../img/substract/Substract_green.png';
import Sub_yellow from '../../img/substract/Substract_yellow.png';
import Sub_white from '../../img/substract/Substract_white.png';
import Sub_pink from '../../img/substract/Substract_pink.png';
import Sub_purple from '../../img/substract/Substract_purple.png';
import Sub_blue from '../../img/substract/Substract_blue.png';
const legendItems = [
  { category: '건강', color: '연두색', gif: Sub_green, className: 'green', values: 80 },
  { category: '금전', color: '노랑색', gif: Sub_yellow, className: 'yellow', values: 120 },
  { category: '개인', color: '흰색', gif: Sub_white, className: 'white', values: 60 },
  { category: '인간관계', color: '분홍색', gif: Sub_pink, className: 'pink', values: 90 },
  { category: '취업', color: '보라색', gif: Sub_purple, className: 'purple', values: 150 },
  { category: '학업', color: '파란색', gif: Sub_blue, className: 'blue', values: 100 },
];


const BarGraph = ({ values }) => {
  // Find the maximum value in the array
  const maxValue = Math.max(...values);

  return (
    <div className="bar-graph-container">
      {/* Bar Graph */}
      <div className="bar-container">
        {values.map((value, index) => (
          <div key={index} className={`bar-item`}>
            {/* Bar */}
            <div className={`bar ${legendItems[index].className}`} style={{ height: `${(value / maxValue) * 50}vh` }}>
              {/* gif */}
              <img src={legendItems[index].gif} alt={`Image ${index}`} style={{ bottom: `${(value / maxValue) * 52}vh` }} className="bar-image" />
            </div>
          </div>
        ))}
      </div>
      {/* Legend */}
      <div className="legend-container">
        {legendItems.map((item, index) => (
          <span key={index} className="legend-item" style={{ color: item.color }}>{item.category} : {item.color}</span>
        ))}
      </div>
    </div>
  );
};

// Example usage
// Example usage
const values = legendItems.map(item => item.values); // Extracting values from legendItems

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
