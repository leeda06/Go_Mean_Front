import React from 'react';

const TextBoxContainer = ({ selected, textBoxes, categoryData, textBoxesRef, containerRef, openModal }) => {
    return (
        <div className="text-boxes" ref={containerRef}>
            {textBoxes[selected.id] && textBoxes[selected.id].map(({ id, nickname, title, content, created_at }, index) => (
                <div
                    key={id}
                    className={`text-box ${categoryData[selected.category].color}`}
                    ref={el => textBoxesRef.current[index] = el || undefined}
                    onClick={() => openModal({ id, nickname, title, content, created_at })}
                >
                    <div className='title'>{title}</div>
                    <div className='name'>{nickname}</div>
                    <div className='text'>{content}</div>
                    <div className='date'>{new Date(created_at).toLocaleDateString()}</div>
                    <img className='img' src={`${categoryData[selected.category].images[0]}`} />
                </div>
            ))}
        </div>
    );
};

export default TextBoxContainer;