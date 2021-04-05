import React from 'react';
//import './css/NewsBarComponent.css';
import NewsContainerComponent from './NewsContainerComponent';
import {Link} from "react-router-dom";

import data from '../assets/data/news';

class NewsBarComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    fillWithData() {
        let arr = [];
        for (let i = 0; i < 9; i++) {
            arr.push(<NewsContainerComponent pos={i + 1} header={data[i].headline} identifier={data[i].id} />)
        }
        return arr;
    }

    render() {
        

        return (
            <aside id="news">
                <div id="news-header">
                    <span>Новини</span>
                </div>
                <div className="news-list">
                    {this.fillWithData()}
                </div>
                <div className="news-continue">
                    <Link to="/topnews"><span>Наступні новини</span></Link>
                </div>
            </aside>
        );
    }
}

export default NewsBarComponent;