import React from 'react';
//import './css/MainMenu.scss';
import logo from './../assets/images/logo.png';
import plane from './../assets/images/plane.svg';
import { NavLink } from 'react-router-dom';

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

    openSearch(e) {
        e.preventDefault();
        
        this.props.toggle({ style: 'flex' });
    }

    render() {
        return (
            <header id="main-header">
                <div id="logo-name">
                    <img src={logo} title="AirClub" id="logo" />
                    <div id="site-name"><NavLink to={process.env.PUBLIC_URL + '/'} style={{textDecoration: 'none', color: 'white'}} ><span>Air</span>Club&trade;</NavLink></div>
                </div>
                <div className={this.state.styles.join(' ')}>
                    <div className={this.state.styles.includes('sticky-menu') ? 'emptyDivOpen collapse' : 'emptyDivClose'}></div>
                    <div className="plane"><img src={plane} title="" /></div>
                    <menu id="main-menu">
                        <li><NavLink to={process.env.PUBLIC_URL + '/aboutus'} style={{textDecoration: 'none', color: 'white'}} >О нас</NavLink></li>
                        <li><a href="#">Каталог</a>
                            <ul className="submenu">
                                <li><NavLink to={process.env.PUBLIC_URL + '/education'} style={{textDecoration: 'none', color: 'white'}} >Обучение</NavLink></li>
                                <li><NavLink to={process.env.PUBLIC_URL + '/flights'} style={{textDecoration: 'none', color: 'white'}} >Полёты</NavLink></li>
                                <li><NavLink to={process.env.PUBLIC_URL + '/rental'} style={{textDecoration: 'none', color: 'white'}} >Аренда</NavLink></li>
                            </ul>
                        </li>
                        <li><NavLink to={process.env.PUBLIC_URL + '/topnews'} style={{textDecoration: 'none', color: 'white'}} >Блог</NavLink></li>
                        <li><NavLink to={process.env.PUBLIC_URL + '/contacts'} style={{textDecoration: 'none', color: 'white'}} >Контакты</NavLink></li>
                    </menu>
                    <div className={this.state.styles.includes('sticky-menu') ? 'emptyDivOpen expand' : 'emptyDivClose'}>
                        <div onClick={(e) => this.openSearch(e)}><i className="fas fa-search fa-lg"></i></div>
                    </div>
                </div>
                <div className={this.state.styles.includes('sticky-menu') ? 'upButtonOpen' : 'upButtonClose'}>
                    <a href="#top">
                        <i className="fas fa-arrow-up"></i>
                    </a>
                </div>
            </header>
        );
    }
}

export default MainMenu;