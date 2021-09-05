import React from 'react';
import userpic from '../assets/images/userpic.png';
import './css/_CommentsComponent.scss';
import arrow from '../assets/images/left_triangle.svg';

class CommentsComponent extends React.Component {
    constructor(props) {
        super(props);
        
    }

    render() {
        return (
            <div className="comments">
                <h3>КОММЕНТАРИИ</h3>
                <div className="comment">
                    <img className="avatar" src={userpic} title="" />
                    <img className="comment-arrow" src={arrow} title="" />
                    <div className="comment-text">
                        <p className="comment-author">Александр Терещенко, <span>12.05.2020 17:42</span></p>
                        <p className="comment-container">Очень хорошая новость</p>
                    </div>
                </div>
                <div className="comment">
                    <img className="avatar" src={userpic} title="" />
                    <img className="comment-arrow" src={arrow} title="" />
                    <div className="comment-text">
                        <p className="comment-author">Александр Терещенко, <span>12.05.2020 17:42</span></p>
                        <p className="comment-container">Очень хорошая новость. Очень хорошая новость</p>
                    </div>
                </div>
                <div className="comment">
                    <img className="avatar" src={userpic} title="" />
                    <img className="comment-arrow" src={arrow} title="" />
                    <div className="comment-text">
                        <p className="comment-author">Александр Терещенко, <span>12.05.2020 17:42</span></p>
                        <p className="comment-container">Очень хорошая новость. Очень хорошая новость</p>
                    </div>
                </div>
                <h4>Добавить коментарий:</h4>
                <textarea placeholder="Введите комментарий..."></textarea>
                <div className="form-buttons">
                    <button>Очистить</button>
                    <button>Отправить</button>
                </div>
            </div>
        );
    }
}

export default CommentsComponent;