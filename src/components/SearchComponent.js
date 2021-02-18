import React, {Component} from 'react';

import './css/SearchComponent.css';

class SearchComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { style: props.open };
    }

    closeSearch(e) {
        e.preventDefault();
        if (e.target.localName === 'input') return;
        this.setState({ style: 'none' });
    }

    componentWillReceiveProps(newProps) {
        this.setState({ style: newProps.open })
    }

    render() {
        return (
            <div id="search" style={{display: this.state.style}} onClick={(e) => this.closeSearch(e)}>
                <form id="searchForm">
                    <i className="fas fa-search fa-2x" id="icon"></i>
                    <input type="text" id="searchFormInput" placeholder="Пошук..." />
                </form>
            </div>
        );
    }
}

export default SearchComponent;