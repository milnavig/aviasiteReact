import React, {Component} from 'react';
import './css/ReviewComponent.scss';
import arrow from '../assets/images/arrow.svg';
import userpic from '../assets/images/userpic.png';

class ReviewComponent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="feedback-wrapper">
                <div className="wrapper-3">
                    <div className="usr-feedback">
                        <div className="message">
                            <p><i>Очень хорошая компания. Это была моя первая работа и я очень рада, что удалось попасть именно в эту компанию, так как я пришла практически с нулевыми знаниями и без опыта в ИТ, но благодаря тому, что ребята в меня поверили и дали шанс, удалось получить работу. Перешла в другую компанию по причине того, ...</i></p>
                        </div>
                        <img src={arrow} title="" />
                        <div className="feedback-author">
                            <b><i>Александр Терещенко, студент</i></b>
                            <img src={userpic} title="" />
                        </div>
                    </div>
                </div>
                <div className="wrapper-3">
                    <div className="usr-feedback">
                        <div className="message">
                            <p><i>Очень хорошая компания. Это была моя первая работа и я очень рада, что удалось попасть именно в эту компанию, так как я пришла практически с нулевыми знаниями и без опыта в ИТ, но благодаря тому, что ребята в меня поверили и дали шанс, удалось получить работу. Перешла в другую компанию по причине того, ...</i></p>
                        </div>
                        <img src={arrow} title="" />
                        <div className="feedback-author">
                            <b><i>Александр Терещенко, студент</i></b>
                            <img src={userpic} title="" />
                        </div>
                    </div>
                </div>
                <div className="wrapper-3">
                    <div className="usr-feedback">
                        <div className="message">
                            <p><i>Очень хорошая компания. Это была моя первая работа и я очень рада, что удалось попасть именно в эту компанию, так как я пришла практически с нулевыми знаниями и без опыта в ИТ, но благодаря тому, что ребята в меня поверили и дали шанс, удалось получить работу. Перешла в другую компанию по причине того, ...</i></p>
                        </div>
                        <img src={arrow} title="" />
                        <div className="feedback-author">
                            <b><i>Александр Терещенко, студент</i></b>
                            <img src={userpic} title="" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ReviewComponent;