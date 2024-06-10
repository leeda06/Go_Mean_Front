import React from 'react';
import { v4 as uuidv4 } from 'uuid';

const TextBoxContainer = ({ selected, textBoxes, categoryData, textBoxesRef, containerRef, openModal }) => {
    console.log(selected.category)
  return (
    <div className="text-boxes" ref={containerRef}>
      {textBoxes[selected.category].map(({ id, name, title, content, date }, index) => (
        <div
          key={id}
          className={`text-box ${categoryData[selected.category].color}`}
          ref={el => textBoxesRef.current[index] = el || undefined}
          onClick={() => openModal({ id, name, title, content, date })}
        >
          <div className='title'>{title}</div>
          <div className='name'>{name}</div>
          <div className='text'>{content}</div>
          <div className='date'>{date}</div>
          <img className='img' src={`${categoryData[selected.category].images[0]}`} />
        </div>
      ))}
    </div>
  );
};

export default TextBoxContainer;
