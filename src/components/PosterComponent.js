import React from 'react';
import './css/PosterComponent.css';

class PosterComponent extends React.Component {
    render() {
        return (
            <div id="main-info">
                <div className="main-info-wrapper">
                    <div id="slogan">
                        <h2>Air Club</h2>
                        <p>
                            Вы хотите летать? Вы хотите подарить полет? Это было не просто, но мы нашли для вас отличные идеи подарков!
                        </p>
                    </div>
                    <div id="forma1">
                        <form>
                            <h3>Маєте питання? Напишіть нам!</h3>
                            <input maxlength="25" placeholder="Введите Ваше имя" className="field" />
                            <input maxlength="25" placeholder="Введите Вашу фамилию" className="field" />
                            <input type="email" maxlength="70" name="e-mail" placeholder="Введите Ваш email" className="field" />
                            <textarea placeholder="Напишите нам" className="textarea"></textarea>
                            <p>Хочете отримувати розсилку?</p>
                            <div id="buttons1">
                                <input type="radio" name="selector1" id="every-week" checked /><label for="every-week">Да, хочу</label>
                                <input type="radio" name="selector1" id="every-month" /><label for="every-month">Нет, не хочу</label>
                            </div>
                            <button type="submit">Отправить</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default PosterComponent;