// src/components/BarGraph.js
import React from 'react';

// 바 그래프 컴포넌트 정의
const BarGraph = ({ values, legendItems }) => {
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
                    <span key={index} className="legend-item" style={{ color: item.color }}><strong>{item.category}</strong> : {item.color}</span>
                ))}
            </div>
        </div>
    );
};

export default BarGraph;
