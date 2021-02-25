import React from 'react';
// import './css/HeaderComponent.css';
import delimiter from '../assets/images/delimiter.svg';

class HeaderComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id={this.props.identifier} className="section-header">
                <div className="decoration"><h3>{this.props.title}</h3></div>
                <img src={delimiter} title="" />
            </div>
        );
    }
}

export default HeaderComponent;