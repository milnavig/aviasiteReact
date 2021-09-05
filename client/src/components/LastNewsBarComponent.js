import React, {Component} from 'react';
import './css/_LastNewsBarComponent.scss';
import img1 from '../assets/images/news/1.jpg';
import img2 from '../assets/images/news/2.jpg';

function LastNewsBarComponent(props) {
    return (
        <div className="news-list-bar"> 
            <h2>НОВИНИ</h2>
            <div className="news-list-item">
                <img src={img1} title=""/>
                <h3><a href="#">ГОТОВИТСЯ ЗАКАЗ НА 4 САМОЛЕТА АН-74</a></h3>
                <p>Вице-премьер-министр Украины - Министр по вопросам стратегических отраслей промышленности Олег Уруский сообщил о подготовке в 2021 году нового заказа на самолеты Ан-74.</p>
            </div>
            <div className="news-list-item">
                <img src={img2} title=""/>
                <h3><a href="#">КИТАЙ МОГ БЫ ПОКУПАТЬ ДО 100 УКРАИНСКИХ ВЕРТОЛЕТОВ ЕЖЕГОДНО</a></h3>
                <p>Китай мог бы покупать до 100 вертолетов Ми-8МСБ, который является глубокой модернизацией АО "Мотор Сич" вертолета Ми-8, ежегодно.</p>
            </div>
        </div>
    );
}

export default LastNewsBarComponent;