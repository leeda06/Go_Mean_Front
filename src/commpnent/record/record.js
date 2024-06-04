import React, { useState, useEffect, useRef } from 'react';
import '../../css/recode.css';
import img from '../../img/image.png';

import Sub_green_off from '../../img/substract/Substract_green_off.png';
import Sub_yellow_off from '../../img/substract/Substract_yellow_off.png';
import Sub_white_off from '../../img/substract/Substract_white_off.png';
import Sub_pink_off from '../../img/substract/Substract_pink_off.png';
import Sub_purple_off from '../../img/substract/Substract_purple_off.png';
import Sub_blue_off from '../../img/substract/Substract_blue_off.png';

import Sub_green from '../../img/substract/Substract_green.png';
import Sub_yellow from '../../img/substract/Substract_yellow.png';
import Sub_white from '../../img/substract/Substract_white.png';
import Sub_pink from '../../img/substract/Substract_pink.png';
import Sub_purple from '../../img/substract/Substract_purple.png';
import Sub_blue from '../../img/substract/Substract_blue.png';

const categoryData = {
  '건강': { color: 'green', images: [Sub_green, Sub_green_off] },
  '금전': { color: 'yellow', images: [Sub_yellow, Sub_yellow_off] },
  '개인': { color: 'white', images: [Sub_white, Sub_white_off] },
  '인간관계': { color: 'pink', images: [Sub_pink, Sub_pink_off] },
  '취업': { color: 'purple', images: [Sub_purple, Sub_purple_off] },
  '학업': { color: 'blue', images: [Sub_blue, Sub_blue_off] }
};


const textBoxes = {
  '건강': [
    { title: '저녁으로 뭐먹지', name: '김미림', content: '돈까쓰, 치킨, 피자, 초밥 다 먹고 싶다 아 저녁 뭐먹지돈까쓰, 치킨, 피자, 초밥 다 먹고 싶다아 저녁 뭐먹지돈까쓰, 치킨, 피자, 초밥 다 먹고 싶다돈까쓰, 치킨, 피자, 초밥 다 먹ㅇㄹㄹㅇㄹㅇㅇ고 싶다...', date: "2024.07.07" },
    { title: '저녁으로 뭐먹지', name: '김미림', content: '돈까쓰, 치킨, 피자, 초밥 다 먹고 싶다...', date: "2024.07.07" },
    { title: '정말정말 긴 고민제목글 아정말 오늘점심 맛있겠다 저녁도 짱 맛있겠는걸?', name: '김미림', content: '돈까쓰, 치킨, 피자, 초밥 다 먹고 싶다...', date: "2024.07.07" },
    { title: '정말정말 긴 고민제목글 아정말 오늘점심 맛있겠다 저녁도 짱 맛있겠는걸?', name: '김미림', content: '돈까쓰, 치킨, 피자, 초밥 다 먹고 싶다 아 저녁 뭐먹지돈까쓰, 치킨, 피자, 초밥 다 먹고 싶다아 저녁 뭐먹지돈까쓰, 치킨, 피자, 초밥 다 먹고 싶다돈까쓰, 치킨, 피자, 초밥 다 먹ㅇㄹㄹㅇㄹㅇㅇ고 싶다...', date: "2024.07.07" },
    { title: '저녁으로 뭐먹지', name: '김미림', content: '돈까쓰, 치킨, 피자, 초밥 다 먹고 싶다 아 저녁 뭐먹지돈까쓰, 치킨, 피자, 초밥 다 먹고 싶다아 저녁 뭐먹지돈까쓰, 치킨, 피자, 초밥 다 먹고 싶다돈까쓰, 치킨, 피자, 초밥 다 먹ㅇㄹㄹㅇㄹㅇㅇ고 싶다...', date: "2024.07.07" },
    { title: '저녁으로 뭐먹지', name: '김미림', content: '돈까쓰, 치킨, 피자, 초밥 다 먹고 싶다...', date: "2024.07.07" }
  ],
  '금전': [
    { title: 'Name 2.1', name: 'Title 2.1', content: '정말정말 긴 고민 글 아정말 오늘점심 맛있겠다 저녁도 짱 맛있겠는걸?', date: "2024.07.07" },
    { title: '저녁으로 뭐먹지', name: 'Title 2.2', content: 'Text 2.2', date: "2024.07.07" },
    { title: '정말정말 긴 고민제목글 아정말 오늘점심 맛있겠다 저녁도 짱 맛있겠는걸?', name: '김미림', content: '돈까쓰, 치킨, 피자, 초밥 다 먹고 싶다...', date: "2024.07.07" },
    { title: '저녁으로 뭐먹지', name: 'Title 2.2', content: 'Text 2.2', date: "2024.07.07" },
    { title: '정말정말 긴 고민제목글 아정말 오늘점심 맛있겠다 저녁도 짱 맛있겠는걸?', name: '김미림', content: '돈까쓰, 치킨, 피자, 초밥 다 먹고 싶다 아 저녁 뭐먹지돈까쓰, 치킨, 피자, 초밥 다 먹고 싶다아 저녁 뭐먹지돈까쓰, 치킨, 피자, 초밥 다 먹고 싶다돈까쓰, 치킨, 피자, 초밥 다 먹ㅇㄹㄹㅇㄹㅇㅇ고 싶다...', date: "2024.07.07" },
    { title: '저녁으로 뭐먹지', name: 'Title 2.2', content: 'Text 2.2', date: "2024.07.07" },
    { title: '정말정말 긴 고민제목글 아정말 오늘점심 맛있겠다 저녁도 짱 맛있겠는걸?', name: '김미림', content: '돈까쓰, 치킨, 피자, 초밥 다 먹고 싶다...', date: "2024.07.07" },
    { title: '저녁으로 뭐먹지', name: 'Title 2.2', content: 'Text 2.2', date: "2024.07.07" },
    { title: '정말정말 긴 고민제목글 아정말 오늘점심 맛있겠다 저녁도 짱 맛있겠는걸?', name: '김미림', content: '돈까쓰, 치킨, 피자, 초밥 다 먹고 싶다 아 저녁 뭐먹지돈까쓰, 치킨, 피자, 초밥 다 먹고 싶다아 저녁 뭐먹지돈까쓰, 치킨, 피자, 초밥 다 먹고 싶다돈까쓰, 치킨, 피자, 초밥 다 먹ㅇㄹㄹㅇㄹㅇㅇ고 싶다...', date: "2024.07.07" },
    { title: '저녁으로 뭐먹지', name: 'Title 2.2', content: 'Text 2.2', date: "2024.07.07" },
    { title: '정말정말 긴 고민제목글 아정말 오늘점심 맛있겠다 저녁도 짱 맛있겠는걸?', name: '김미림', content: '돈까쓰, 치킨, 피자, 초밥 다 먹고 싶다...', date: "2024.07.07" },
    { title: '저녁으로 뭐먹지', name: 'Title 2.2', content: 'Text 2.2', date: "2024.07.07" },
    { title: '정말정말 긴 고민제목글 아정말 오늘점심 맛있겠다 저녁도 짱 맛있겠는걸?', name: '김미림', content: '돈까쓰, 치킨, 피자, 초밥 다 먹고 싶다 아 저녁 뭐먹지돈까쓰, 치킨, 피자, 초밥 다 먹고 싶다아 저녁 뭐먹지돈까쓰, 치킨, 피자, 초밥 다 먹고 싶다돈까쓰, 치킨, 피자, 초밥 다 먹ㅇㄹㄹㅇㄹㅇㅇ고 싶다...', date: "2024.07.07" },
    { title: '저녁으로 뭐먹지', name: 'Title 2.2', content: 'Text 2.2', date: "2024.07.07" },
    { title: '정말정말 긴 고민제목글 아정말 오늘점심 맛있겠다 저녁도 짱 맛있겠는걸?', name: '김미림', content: '돈까쓰, 치킨, 피자, 초밥 다 먹고 싶다...', date: "2024.07.07" },
    { title: '저녁으로 뭐먹지', name: 'Title 2.2', content: 'Text 2.2', date: "2024.07.07" },
    { title: '정말정말 긴 고민제목글 아정말 오늘점심 맛있겠다 저녁도 짱 맛있겠는걸?', name: '김미림', content: '돈까쓰, 치킨, 피자, 초밥 다 먹고 싶다 아 저녁 뭐먹지돈까쓰, 치킨, 피자, 초밥 다 먹고 싶다아 저녁 뭐먹지돈까쓰, 치킨, 피자, 초밥 다 먹고 싶다돈까쓰, 치킨, 피자, 초밥 다 먹ㅇㄹㄹㅇㄹㅇㅇ고 싶다...', date: "2024.07.07" }
  ],
  '개인': [
    { title: 'Name 3.1', name: 'Title 3.1', content: 'Text 3.1', date: "2024.07.07" },
    { title: 'Name 3.2', name: 'Title 3.2', content: 'Text 3.2', date: "2024.07.07" },
    { title: 'Name 3.3', name: 'Title 3.3', content: 'Text 3.3', date: "2024.07.07" }
  ],
  '인간관계': [
    { title: 'Name 4.1', name: 'Title 4.1', content: 'Text 4.1', date: "2024.07.07" },
    { title: 'Name 4.2', name: 'Title 4.2', content: 'Text 4.2', date: "2024.07.07" },
    { title: 'Name 4.3', name: 'Title 4.3', content: 'Text 4.3', date: "2024.07.07" }
  ],
  '취업': [
    { title: 'Name 5.1', name: 'Title 5.1', content: 'TeText 5.3Text 5.3Text 5.3xt 5.1', date: "2024.07.07" },
    { title: 'Name 5.2', name: 'Title 5.2', content: 'TexText 5.3Text 5.3t 5.2', date: "2024.07.07" },
    { title: '정말정말 긴 고민제목글 아정말 오늘점심 맛있겠다 저녁도 짱 맛있겠는걸?', name: 'Title 5.3', content: 'Text 5.Text 5.3Text 5.3Text 5.33Text 5.3Text 5.3Text 5.3Text 5.3Text 5.3Text 5.3', date: "2024.07.07" },
    { title: '취업이 정말 하고 싶다.', name: 'name', content: '내가 졸업하고 나서 어떤 일을 할지 고민된다. 경제학을 공부했으니까 그거에 맞는 직무를 찾고 있는데, 어디가 좋을지 감이 안 온다. 뭐가 내 스타일에 잘 맞을까 생각 중이다. 이력서랑 자기소개서 작성하는 게 참 귀찮다. 내가 뭐를 강조해야 할지, 어떤 경험이 중요한지도 모르겠다. 면접도 어떻게 준비해야 할지 막막하다. 이렇게 걱정만 하는 내가 싫다. 그리고 경쟁이 치열하니까 더 경쟁력을 강화해야 할 것 같은데 자격증이나 외국어 등 더 갖추는 게 좋을 거 같아서 고민이 된다. 나는 정말 왜이렇게 구제불능인 걸까.', date: "2024.07.07" },
    { title: 'Name 5.2', name: 'Title 5.2', content: 'Text 5.2', date: "2024.07.07" },
    { title: 'Name 5.3', name: 'Title 5.3', content: 'Text Text 5.3Text 5.3Text 5.35.3', date: "2024.07.07" },
    { title: 'Name 6.3', name: 'Title 6.3', content: 'Text 6.Text 5.3Text 5.3Text 5.3Text 5.3Text 5.3Text 5.3Text 5.33', date: "2024.07.07" },
    { title: 'Name 5.2', name: 'Title 5.2', content: 'Text 5.2', date: "2024.07.07" },
    { title: 'Name 5.3', name: 'Title 5.3', content: 'Text 5.3', date: "2024.07.07" }
  ],
  '학업': [
    { title: 'Name 6.1', name: 'Title 6.1', content: 'Text 6.1', date: "2024.07.07" },
    { title: 'Name 6.2', name: 'Title 6.2', content: 'Text 6.2', date: "2024.07.07" },
    { title: 'Name 6.3', name: 'Title 6.3', content: 'Text 6.3', date: "2024.07.07" },
    { title: 'Name 6.2', name: 'Title 6.2', content: 'Text 6.2', date: "2024.07.07" },
    { title: 'Name 6.3', name: 'Title 6.3', content: 'Text 6.3', date: "2024.07.07" }
  ]
};

const App = () => {
  // 데이터 기본값
  const [selected, setSelected] = useState({ category: '건강', color: 'green' });
  // 창 띄워져 있는지 확인
  const [isModalOpen, setIsModalOpen] = useState(false);
  // 질문 값 받기
  const [selectedTextBox, setSelectedTextBox] = useState(null);
  const textBoxesRef = useRef([]);
  const containerRef = useRef(null);

  useEffect(() => {
    positionTextBoxes();
  }, [selected]);

  useEffect(() => {
    textBoxesRef.current = [];
  }, [selected]);

  // 질문 테마 리스트
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

  const renderCategories = () => {
    return Object.keys(textBoxes).map(category => {
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
    });
  };

  // 답변 ( 댓글 ) 함수
  const renderTextBoxes = () => {
    return selected.category && textBoxes[selected.category].map(({ id, name, title, content, date }, index) => (
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
    ));
  };

  const chatMessages = [
    { name: 'John', time: '23:09', content: 'Hello there!' },
    { name: 'Alice', time: '23:10', content: 'Hi John!' },
    { name: 'Alice', time: '23:10', content: 'Hi John!' },
    { name: 'Alice', time: '23:10', content: 'Hi John!' },
    { name: 'Alice', time: '23:10', content: 'Hi John!' },
    { name: 'Alice', time: '23:10', content: 'Hi John!' },
    { name: 'Alice', time: '23:10', content: 'Hi John!' },
    { name: 'Alice', time: '23:10', content: 'Hi John!' },
    { name: 'Alice', time: '23:10', content: 'Hi John!' },
    { name: 'Alice', time: '23:10', content: 'Hi John!' },
    { name: 'Alice', time: '23:10', content: 'Hi John!' }
  ];

  return (
    <div className='main' style={{ boxShadow: isModalOpen ? 'inset' : '' }}>
      <div className={`container ${isModalOpen ? 'modal-open' : ''}`}>
        <div className='div'>
            <ul className="list">
              {renderCategories()}
            </ul>
          <div className="text-boxes" ref={containerRef}>
            {renderTextBoxes()}
          </div>
        </div>
      </div>
      {isModalOpen && selectedTextBox && (
        <div className="modal">
          <div className="modal-div modal-content">
            <div className='detail'>
              <div className="title">{selectedTextBox.title}</div>
              <div className="name">{selectedTextBox.name}</div>
              <div className="text">{selectedTextBox.content}</div>
            </div>
            <div className='answer'>
              <div className='respondent'>
                <img className="img" src={img}></img>
                <div className="name">곰곰이</div>
              </div>
              <div className="text">친구야, 걱정하지 마...</div>
            </div>
          </div>
          <div className='modal-div modal-comment'>
            <div className='comment'>
              <div className='contents'>
                {chatMessages.map((message, index) => (
                  <div className='chat' key={index}>
                    <div className='name'>{message.name}<div className='date'>{message.time}</div></div>
                    <div className='content'>{message.content}</div>
                  </div>
                ))}
              </div>
              <div className='text-container'>
                <div className='text-content'>
                  <input type="text" id="nekname" name="nekname" placeholder='닉네임' required />
                </div>
                <div className='text-content'>
                  <input type="text" id="content" name="content" placeholder="댓글로 응원의 메시지를 남겨보세요!" required />
                  <button className='send'>보내기</button>
                </div>
              </div>
            </div>
            <button className='exit' onClick={closeModal}>X</button>
          </div>
        </div>
      )}
    </div>

  );
};

export default App;
