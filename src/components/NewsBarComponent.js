import React from 'react';
import './css/NewsBarComponent.css';
import NewsContainerComponent from './NewsContainerComponent';

class NewsBarComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <aside id="news">
                <div id="news-header">
                    <span>Новини</span>
                </div>
                <div className="news-list">
                    <NewsContainerComponent identifier="1" header="Антонов возобновит производство трех самолетов" />
                    <NewsContainerComponent identifier="2" header="В Украине планируют возобновить выпуск Ан-124" />
                    <NewsContainerComponent identifier="3" header="В Украине нашелся первый заказчик на Ан-158" />
                    <NewsContainerComponent identifier="4" header="Посол в США: У Харьковского авиазавода появился американский инвестор" />
                    <NewsContainerComponent identifier="5" header="Иностранцы скупают сверхлегкие украинские самолеты" />
                    <NewsContainerComponent identifier="6" header="Одесский авиазавод будет выпускать самолеты совместно с Чехией и США" />
                    <NewsContainerComponent identifier="7" header="Знаковое событие. Соглашение Антонова с Boeing" />
                    <NewsContainerComponent identifier="8" header="Антонов заключил соглашения на авиасалоне Farnborough" />
                    <NewsContainerComponent identifier="9" header="Boeing и Airbus заключили в Фарнборо сделки на $43 млрд" />
                </div>
                <div className="news-continue">
                    <a href="#"><span>Наступні новини</span></a>
                </div>
            </aside>
        );
    }
}

export default NewsBarComponent;