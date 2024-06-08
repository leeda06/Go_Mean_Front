import React from 'react';
import ReactDOM from 'react-dom/client';

// 홈화면 렌더링
import Home from './commpnent/home/home.js';

// 고민작성 화면 렌더링
// import Write from './commpnent/write/write.js';

// 통계 화면 렌더링
// import Graph from './commpnent/graph/graph.js';

// 쓰레기보관함 화면 렌더링
// import Record from './commpnent/record/record';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<Home />
    	{/* <Write /> */}
    	{/* <Graph /> */}
    	{/* <Record /> */}
  	</React.StrictMode>
);
