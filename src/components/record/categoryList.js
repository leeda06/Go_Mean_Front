import React from 'react';

const CategoryList = ({ selected, setSelected, categoryData, textBoxes }) => {
  return (
    <ul className="list">
      {Object.keys(textBoxes).map(category => {
        const { color, images } = categoryData[category];
        return (
          <li
            className={`li ${selected.category === category ? color : 'default'}`}
            key={category}
            onClick={() => setSelected({ category, color })}
            style={{
              alignItems: selected.category === category ? 'center' : 'left',
              justifyContent: selected.category === category ? 'center' : 'right',
              flexDirection: selected.category === category ? 'column' : 'row',
              height: selected.category === category ? '200px' : "fit-content",
              gap: selected.category === category ? '10px' : ''
            }}
          >
            <img src={selected.category === category ? images[0] : images[1]} style={{ width: selected.category === category ? '150px' : '40px', position: selected.category === category ? "static" : "absolute" }} />
            <div className={`li-id ${selected.category === category ? color : ''}`}>{category}</div>
          </li>
        );
      })}
    </ul>
  );
};

export default CategoryList;
