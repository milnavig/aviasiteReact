import React from 'react';
import './css/NewsPageComponent.scss';

import SubMenu from './SubMenu';
import MainMenu from './MainMenu';
import FooterComponent from './FooterComponent';
import SearchComponent from './SearchComponent';
import NewsArticleComponent from './NewsArticleComponent';
import BreadCrumbsComponent from './BreadCrumbsComponent';

class MainPageComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            style: 'none'
        }
    }

    render() {
        return (
            <div className="grid-for-article-page">
                <SearchComponent open={this.state.style} />
                <SubMenu toggle={(el) => this.setState(el)} />
                <MainMenu toggle={(el) => this.setState(el)} />
                <BreadCrumbsComponent />
                <NewsArticleComponent />
                <FooterComponent />
            </div>
        );
    }
}

export default MainPageComponent;