import React from 'react';
import './css/NewsListPageComponent.scss';

import SubMenu from './SubMenu';
import MainMenu from './MainMenu';
import FooterComponent from './FooterComponent';
import SearchComponent from './SearchComponent';
import NewsListComponent from './NewsListComponent';

import LastNewsBarComponent from './LastNewsBarComponent';

class NewsListPageComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            style: 'none'
        }
    }

    render() {
        return (
            <div className="grid-for-list-page">
                <SearchComponent open={this.state.style} />
                <SubMenu toggle={(el) => this.setState(el)} />
                <MainMenu toggle={(el) => this.setState(el)} />                
                
                <NewsListComponent />
                <LastNewsBarComponent />
                <FooterComponent />
            </div>
        );
    }
}

export default NewsListPageComponent;