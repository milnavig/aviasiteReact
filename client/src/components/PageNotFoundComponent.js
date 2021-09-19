import React from 'react';
import './css/PageNotFoundComponent.scss';

import SubMenu from './SubMenu';
import MainMenu from './MainMenu';
import FooterComponent from './FooterComponent';
import SearchComponent from './SearchComponent';

class PageNotFoundComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            style: 'none'
        }
    }

    componentDidMount() {
        window.scrollTo(0, 0);
    }
    
    render() {
        return (
            <div className="grid-for-notfound-page">
                <SearchComponent open={this.state.style} />
                <SubMenu toggle={(el) => this.setState(el)} />
                <MainMenu toggle={(el) => this.setState(el)} />                
                <div className="message-404">
                    <div>
                        <h1>{"404"}</h1>
                        <p>{"Page was not found"}</p>
                    </div>
                </div>
                <FooterComponent />
            </div>
        );
    }
}

export default PageNotFoundComponent;