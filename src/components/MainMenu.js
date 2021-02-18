import React from 'react';
import './css/MainMenu.css';
import logo from './../assets/images/logo.png';
import plane from './../assets/images/plane.svg';

class MainMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {styles: ["header-menu"]}
        this.listenToScroll = this.listenToScroll.bind(this);
    }

    componentDidMount() {
        window.addEventListener('scroll', this.listenToScroll)
    }
      
    componentWillUnmount() {
        window.removeEventListener('scroll', this.listenToScroll)
    }

    listenToScroll(e) {
        const position = window.pageYOffset;
        let current_state = this.state;
        if (position > 180) {
            this.setState({styles: current_state.styles.includes("sticky-menu") ? current_state.styles : current_state.styles.concat("sticky-menu")})
        }
        if (position <= 180) {
            //console.log(current_state.styles)
            this.setState({styles: [current_state.styles[0]]})
        }
    }

    render() {
        return (
            <header id="main-header">
                <div id="logo-name">
                    <img src={logo} title="AirClub" id="logo" />
                    <div id="site-name"><span>Air</span>Club&trade;</div>
                </div>
                <div className={this.state.styles.join(' ')}>
                    <div className={this.state.styles.includes('sticky-menu') ? 'emptyDivOpen collapse' : 'emptyDivClose'}></div>
                    <div className="plane"><img src={plane} title="" /></div>
                    <menu id="main-menu">
                        <li><a href="#">О нас</a></li>
                        <li><a href="#">Каталог</a>
                            <ul className="submenu">
                                <li><a href="#">Обучение</a></li>
                                <li><a href="#">Полёты</a></li>
                                <li><a href="#">Аренда</a></li>
                            </ul>
                        </li>
                        <li><a href="#">Блог</a></li>
                        <li><a href="#">Контакты</a></li>
                    </menu>
                    <div className={this.state.styles.includes('sticky-menu') ? 'emptyDivOpen expand' : 'emptyDivClose'}></div>
                </div>
            </header>
        );
    }
}

export default MainMenu;