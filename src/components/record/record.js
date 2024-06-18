import React, { useState, useEffect, useRef } from 'react';
import '../../css/recode.css';
import img from '../../img/image.png';
import CategoryList from './categoryList';
import TextBoxContainer from './textBoxContainer';
import Modal from './modal';
import { categoryData } from './Data/data.js';
import axios from 'axios';

const Record = () => {
    const [selected, setSelected] = useState({ category: '건강', color: 'green', id: categoryData['건강'].id });
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedTextBox, setSelectedTextBox] = useState(null);
    const [textBoxes, setTextBoxes] = useState({});
    const textBoxesRef = useRef([]);
    const containerRef = useRef(null);

    useEffect(() => {
        fetchWorries();
    }, [selected]);

    useEffect(() => {
        positionTextBoxes();
    }, [textBoxes]);

    useEffect(() => {
        textBoxesRef.current = [];
    }, [selected]);

    const fetchWorries = async () => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_SERVER}/worries`);
            const fetchedWorries = response.data;
            const categorizedWorries = categorizeWorries(fetchedWorries);
            setTextBoxes(categorizedWorries);
        } catch (error) {
            console.error('Error fetching worries:', error);
        }
    };

    const categorizeWorries = (worries) => {
        return worries.reduce((acc, worry) => {
            const { category_id } = worry;
            if (!acc[category_id]) {
                acc[category_id] = [];
            }
            acc[category_id].push(worry);
            return acc;
        }, {});
    };

    const positionTextBoxes = () => {
        const boxes = textBoxesRef.current.filter(Boolean);
        const container = containerRef.current;

        if (!container || boxes.length === 0) return;

        const columns = 3;
        const columnHeights = Array(columns).fill(0);
        const columnWidth = (container.offsetWidth - (columns - 1) * 40) / columns;

        boxes.forEach(box => {
            const minHeight = Math.min(...columnHeights);
            const column = columnHeights.indexOf(minHeight);
            const x = column * (columnWidth + 40);
            const y = minHeight;

            if (box) {
                box.style.transform = `translate(${x}px, ${y}px)`;
                columnHeights[column] += box.offsetHeight + 40;
            }
        });

        container.style.height = `${Math.max(...columnHeights)}px`;
    };

    const openModal = (textBox) => {
        setIsModalOpen(true);
        setSelectedTextBox(textBox);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedTextBox(null);
    };

    return (
        <div className='main' style={{ boxShadow: isModalOpen ? 'inset' : '' }}>
            <div className={`container ${isModalOpen ? 'modal-open' : ''}`}>
                <div className='div'>
                    <CategoryList
                        selected={selected}
                        setSelected={(newSelected) => setSelected({ ...newSelected, id: categoryData[newSelected.category].id })}
                        categoryData={categoryData}
                        textBoxes={textBoxes}
                    />
                    <TextBoxContainer
                        selected={selected}
                        textBoxes={textBoxes}
                        categoryData={categoryData}
                        textBoxesRef={textBoxesRef}
                        containerRef={containerRef}
                        openModal={openModal}
                    />
                </div>
            </div>
            {isModalOpen && selectedTextBox && (
                <>
                    <div className="modal-overlay" onClick={closeModal}></div>
                    <Modal
                        selectedTextBox={selectedTextBox}
                        closeModal={closeModal}
                        img={img}
                    />
                </>
            )}
        </div>
    );
};

export default Record;
