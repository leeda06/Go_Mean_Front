import React from 'react';

// 바 그래프 컴포넌트 정의
const BarGraph = ({ values, legendItems, totalWorries }) => {
    return (
        <div className="bar-graph-container">
            {/* 바 그래프 컨테이너 */}
            <div className="bar-container">
                {values.map((value, index) => (
                    <div key={index} className={`bar-item`}>
                        {/* 바 */}
                        <div className={`bar ${legendItems[index].className}`} style={{ height: `${value * 0.6}vh` }}>
                            {/* 이미지(gif) */}
                            <img src={legendItems[index].gif} alt={`Image ${index}`} style={{ bottom: `${value * 0.6}vh` }} className="bar-image" />
                        </div>
                    </div>
                ))}
            </div>
            {/* 범례 컨테이너 */}
            <div className="legend-container">
                {legendItems.map((item, index) => (
                    <span key={index} className="legend-item" style={{ color: 'white' }}>
                        <strong>{item.category}</strong> : {item.color}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default BarGraph;
