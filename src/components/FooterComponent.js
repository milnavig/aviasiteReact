import React from 'react';
//import './css/FooterComponent.scss';
import logo from './../assets/images/logo_white.png';

class FooterComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <footer id="footer-4">
                    <div id="white_logo">
                        <img src={logo} title="AirClub" />
                    </div>
                    
                    <div className="footer_menu">
                        <ul>
                            <li><strong>Категорія 1</strong></li>
                            <li><a href="#">Пункт меню 1</a></li>
                            <li><a href="#">Пункт меню 2</a></li>
                            <li><a href="#">Пункт меню 3</a></li>
                            <li><a href="#">Пункт меню 4</a></li>
                            <li><a href="#">Пункт меню 5</a></li>
                        </ul>
                        <ul>
                            <li><strong>Категорія 2</strong></li>
                            <li><a href="#">Пункт меню 1</a></li>
                            <li><a href="#">Пункт меню 2</a></li>
                            <li><a href="#">Пункт меню 3</a></li>
                            <li><a href="#">Пункт меню 4</a></li>
                            <li><a href="#">Пункт меню 5</a></li>
                        </ul>
                        <ul>
                            <li><strong>Категорія 3</strong></li>
                            <li><a href="#">Пункт меню 1</a></li>
                            <li><a href="#">Пункт меню 2</a></li>
                            <li><a href="#">Пункт меню 3</a></li>
                            <li><a href="#">Пункт меню 4</a></li>
                            <li><a href="#">Пункт меню 5</a></li>
                        </ul>
                    </div>

                    <div id="big_socbuttons">
                        <ul>
                            <li className="facebook"><a href="#" title="Facebook"><i className="fab fa-facebook-f fa-lg"></i></a></li>
                            <li className="telegram"><a href="#" title="Telegram"><i className="fab fa-telegram-plane fa-lg"></i></a></li>
                            <li className="twitter"><a href="#" title="Twitter"><i className="fab fa-twitter fa-lg"></i></a></li>
                            <li className="rss"><a href="#" title="RSS"><i className="fas fa-rss fa-lg"></i></a></li>
                        </ul>
                    </div>
                </footer>
                <footer id="footer-5">
                    <span>AirClub © 2021</span>
                </footer>
            </>
        );
    }
}

export default FooterComponent;