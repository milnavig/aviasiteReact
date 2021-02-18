import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import SearchComponent from './SearchComponent';

import './css/SubMenu.css';

class SubMenu extends Component {
    constructor() {
        super();
        this.state = { style: 'none' };
    }

    openSearch(e) {
        e.preventDefault();
        
        this.setState({ style: 'flex' });
    }

    render() {
        return (
            <React.Fragment>
                <SearchComponent open={this.state.style} />
                <header id="info-panel">
                
                    <ul id="header-list">
                        <li className="phone"><div><i className="fas fa-phone-alt fa-lg" title="Telephone"></i></div></li>
                        <li>
                            <p>+38 094 84 78</p>
                            <div className="hidNumbers">
                                <div></div>
                                <ul >
                                    <li>+38 094 84 78</li>
                                    <li>+38 094 84 79</li>
                                </ul>
                            </div>
                            
                        </li>
                        <li className="facebook"><a href="#" title="Facebook"><i className="fab fa-facebook-f fa-lg"></i></a></li>
                        <li className="telegram"><a href="#" title="Telegram"><i className="fab fa-telegram-plane fa-lg"></i></a></li>
                        <li className="twitter"><a href="#" title="Twitter"><i className="fab fa-twitter fa-lg"></i></a></li>
                        <li className="rss"><a href="#" title="RSS"><i className="fas fa-rss fa-lg"></i></a></li>
                        <li className="search" id="searchButton" onClick={(e) => this.openSearch(e)}><div><i className="fas fa-search fa-lg"></i></div></li>
                    </ul>
                    
                </header>
            </React.Fragment>
        );
    }
}

export default SubMenu;