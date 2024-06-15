import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Modal = ({ selectedTextBox, closeModal, img }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    if (selectedTextBox) {
      fetchComments(selectedTextBox.id);
    }
  }, [selectedTextBox]);

  const fetchComments = async (worryId) => {
    try {
      const response = await axios.get(`http://localhost:5000/comments/${worryId}`);
      setComments(response.data);
    } catch (error) {
      console.error('Error fetching comments:', error);
    }
  };

  return (
      <div className="modal">
        <div className="modal-div modal-content">
          <div className='detail'>
            <div className="title">{selectedTextBox.title}</div>
            <div className="name">{selectedTextBox.nickname}</div>
            <div className="text">{selectedTextBox.content}</div>
          </div>
          <div className='answer'>
            <div className='respondent'>
              <img className="img" src={img} alt="곰곰이" />
              <div className="name">곰곰이</div>
            </div>
            <div className="text">친구야, 걱정하지 마...</div>
          </div>
        </div>
        <div className='modal-div modal-comment'>
          <div className='comment'>
            <div className='contents'>
              {(comments || []).map((comment, index) => (
                  <div className='chat' key={comment.id}>
                    <div className='name'>{comment.nickname}<div className='date'>{new Date(comment.timestamp).toLocaleTimeString()}</div></div>
                    <div className='content'>{comment.comment}</div>
                  </div>
              ))}
            </div>
            <div className='text-container'>
              <div className='text-content'>
                <input type="text" id="nickname" name="nickname" placeholder='닉네임' required />
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
