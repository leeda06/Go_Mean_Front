import React, { useState, useEffect } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';

// 이미지 파일 (백그라운드, 곰곰이, 로딩)
import Background from '../../img/background.gif';
import GomGomE from '../../img/gomgomE.png';
import Loding from '../../img/loding.gif';

// 고민작성 화면 CSS 파일
import '../../css/write.css';
import axios from 'axios';

function Write({ setActiveComponent, selectedIndex }) {
    const [categoryId, setCategoryId] = useState('');
    const [title, setTitle] = useState('');
    const [writer, setWriter] = useState('');
    const [content, setContent] = useState('');
    const [advice, setAdvice] = useState('');
    const [showGomGomE, setShowGomGomE] = useState(false);
    const [isAdviceGiven, setIsAdviceGiven] = useState(false);
    const [showPopup, setShowPopup] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const handleInput = () => {
            const adviceButton = document.getElementById('Advice-button');
            if (title.trim() !== '' && writer.trim() !== '' && content.trim() !== '') {
                adviceButton.style.color = 'white';
                adviceButton.disabled = false;
            } else {
                adviceButton.style.color = 'gray';
                adviceButton.disabled = true;
            }
        };

        // inputContent.addEventListener('input', handleInput);
        handleInput(); // 초기 상태 설정

        document.getElementById('Input-Title').addEventListener('input', handleInput);
        document.getElementById('Input-Writer').addEventListener('input', handleInput);
        document.getElementById('Input-Content').addEventListener('input', handleInput);

        return () => {
            document.getElementById('Input-Title').removeEventListener('input', handleInput);
            document.getElementById('Input-Writer').removeEventListener('input', handleInput);
            document.getElementById('Input-Content').removeEventListener('input', handleInput);

        };
    }, [title, writer, content]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!title || !writer || !content) {
            setAdvice('');
            alert('모든 입력란을 채워주세요.');
            return;
        }

        setLoading(true);

        let newCategoryId;
        switch (selectedIndex) {
            case 0:
                newCategoryId = '667114bdf81f1fd0f6a26a25';
                break;
            case 1:
                newCategoryId = '667114bdf81f1fd0f6a26a26';
                break;
            case 2:
                newCategoryId = '667114bdf81f1fd0f6a26a27';
                break;
            case 3:
                newCategoryId = '667114bdf81f1fd0f6a26a28';
                break;
            case 4:
                newCategoryId = '667114bdf81f1fd0f6a26a29';
                break;
            case 5:
                newCategoryId = '667114bdf81f1fd0f6a26a2a';
                break;
            default:
                newCategoryId = null;
        }

        setCategoryId(newCategoryId);

        try {
            const postResponse = await axios.post(`${process.env.REACT_APP_SERVER}/worries`, {
                title: title,
                content: content,
                nickname: writer,
                ai_advice: '',
                category_id: newCategoryId,
            });

            const createdWorryId = postResponse.data.id; // 서버 응답에서 worry ID를 가져옵니다.

            if (!createdWorryId) {
                throw new Error('생성된 Worry ID를 가져오지 못했습니다.');
            }

            const aiAdvice = postResponse.data.ai_advice;

            setAdvice(aiAdvice);
            setShowGomGomE(true);
            setIsAdviceGiven(true);
        } catch (error) {
            console.error('글 전송 중 오류가 발생했습니다.', error);
        }

        setLoading(false);
    };

    const handleSave = () => {
        setShowPopup(true);
    };

    const moveTorecord = () => {
        setActiveComponent('Record');
    };

    const handleDelete = () => {
        setActiveComponent('Home');
    };

    // useEffect(() => {
    //     const adviceButton = document.getElementById('Advice-button');
    //     const solutionButton = document.getElementById('Solution-button');
    //     const inputContent = document.getElementById('Input-Content');
    //
    //     inputContent.addEventListener('input', () => {
    //         if (inputContent.value.trim() !== '') {
    //             adviceButton.style.color = 'white';
    //             solutionButton.style.color = 'white';
    //         } else {
    //             adviceButton.style.color = 'gray';
    //             solutionButton.style.color = 'gray';
    //         }
    //     });
    //
    //     return () => {
    //         inputContent.removeEventListener('input', () => {});
    //     };
    // }, []);

    return (
        <div>
            <div className='background-container'>
                <img src={Background} className='background' />
            </div>

            <div className='Write-Container'>
                <div className='Write-Gomean'>
                    <form className='Input-Text' onSubmit={handleSubmit}>
                        <input
                            id='Input-Title'
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder='제목을 입력하세요'
                            disabled={isAdviceGiven}
                        />
                        <input
                            id='Input-Writer'
                            value={writer}
                            onChange={(e) => setWriter(e.target.value)}
                            placeholder='작성자'
                            disabled={isAdviceGiven}

                        />
                        <textarea
                            id='Input-Content'
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                            placeholder='어떤 고민을 가지고 있나요?'
                            disabled={isAdviceGiven}
                        />
                        <div id='Advice' className='Advice-container'>
                            {loading ? (
                                <div className='Loading'>
                                    <img src={Loding} alt='Loading...' />
                                </div>
                            ) : (
                                advice && <div>{advice}</div>
                            )}
                        </div>

                        {showGomGomE && (
                            <div id='GomGomE'>
                                <img src={GomGomE} className='GomGomE' />
                                &nbsp; 곰곰이
                            </div>
                        )}

                        <button
                            type={isAdviceGiven ? 'button' : 'submit'}
                            id='Advice-button'
                            className={(title && writer && content) ? 'active' : ''}
                            disabled={!title || !writer || !content}
                            onClick={isAdviceGiven ? handleSave : handleSubmit}
                        >
                            {isAdviceGiven ? '보관' : '조언받기'}
                        </button>
                        {isAdviceGiven && (
                            <button
                                type='button'
                                id='Solution-button'
                                className='active'
                                onClick={handleSave}
                            >
                                해소
                            </button>
                        )}

                    </form>
                </div>

                {/* 팝업창 */}
                {showPopup && (
                    <div className='Popup'>
                        <div id='Popup-Content'>
                            <p className='popUp-title'>&nbsp;&nbsp;고민이 보관 되었습니다.&nbsp;&nbsp;</p>
                            <p className='popUp-message'>저장된 고민을 확인해보세요.</p>
                            <button
                                className='View-button'
                                onClick={moveTorecord}>보관함
                            </button>
                        </div>
                    </div>
                )}


                <button className='delete-button' onClick={handleDelete}>
                    <i className='bi bi-x'></i>
                </button>
            </div>
        </div>
    );
}

export default Write;
