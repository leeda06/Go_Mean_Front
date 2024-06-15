import React, { useState, useEffect } from 'react';
import '../../css/graph.css';
import BarGraph from './barGraph.js';
import axios from 'axios';
import { categoryData } from '../record/Data/data';

// 각 카테고리의 이름과 id를 포함하는 배열 생성
const categories = Object.keys(categoryData).map(key => ({
    category: key,
    category_id: categoryData[key].id,
    color: categoryData[key].color,
    images: categoryData[key].images
}));

const App = () => {
    const [worryCounts, setWorryCounts] = useState([]);

    useEffect(() => {
        const fetchWorries = async () => {
            try {
                const response = await axios.get('http://localhost:5000/worries');
                const fetchedWorries = response.data;

                const counts = categories.map(item => ({
                    category: item.category,
                    count: fetchedWorries.filter(worry => worry.category_id === item.category_id).length
                }));

                setWorryCounts(counts);
            } catch (error) {
                console.error('Error fetching worries:', error);
            }
        };

        fetchWorries();
    }, []);

    const totalWorries = worryCounts.reduce((total, item) => total + item.count, 0);
    const values = worryCounts.map(item => (totalWorries > 0 ? (item.count / totalWorries) * 100 : 0));

    return (
        <div className="app-container">
            <div className="graph-container">
                <BarGraph values={values} categories={categories} totalWorries={totalWorries} />
            </div>
        </div>
    );
};

export default App;
