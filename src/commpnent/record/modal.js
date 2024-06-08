import React from 'react';

const Modal = ({ selectedTextBox, closeModal, img }) => {
  const chatMessages = [
    { name: 'John', time: '23:09', content: 'Hello there!' },
    { name: 'Alice', time: '23:10', content: 'Hi John!' },,
    { name: 'Alice', time: '23:10', content: 'Hi John!' },,
    { name: 'Alice', time: '23:10', content: 'Hi John!' },,
    { name: 'Alice', time: '23:10', content: 'Hi John!' },,
    { name: 'Alice', time: '23:10', content: 'Hi John!' },,
    { name: 'Alice', time: '23:10', content: 'Hi John!' },,
    { name: 'Alice', time: '23:10', content: 'Hi John!' },,
    { name: 'Alice', time: '23:10', content: 'Hi John!' },,
    { name: 'Alice', time: '23:10', content: 'Hi John!' },,
    { name: 'Alice', time: '23:10', content: 'Hi John!' },,
    { name: 'Alice', time: '23:10', content: 'Hi John!' },,
    { name: 'Alice', time: '23:10', content: 'Hi John!' },,
    { name: 'Alice', time: '23:10', content: 'Hi John!' },,
    { name: 'Alice', time: '23:10', content: 'Hi John!' },,
    { name: 'Alice', time: '23:10', content: 'Hi John!' },,
    { name: 'Alice', time: '23:10', content: 'Hi John!' },,
    { name: 'Alice', time: '23:10', content: 'Hi John!' },,
    { name: 'Alice', time: '23:10', content: 'Hi John!' },,
    { name: 'Alice', time: '23:10', content: 'Hi John!' },,
    { name: 'Alice', time: '23:10', content: 'Hi John!' },,
    { name: 'Alice', time: '23:10', content: 'Hi John!' },,
    { name: 'Alice', time: '23:10', content: 'Hi John!' },,
    { name: 'Alice', time: '23:10', content: 'Hi John!' },,
    { name: 'Alice', time: '23:10', content: 'Hi John!' },,
    { name: 'Alice', time: '23:10', content: 'Hi John!' },,
    { name: 'Alice', time: '23:10', content: 'Hi John!' },
    // 추가 채팅 메시지
  ];

  return (
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
  );
};

export default Modal;
