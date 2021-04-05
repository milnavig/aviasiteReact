import React from 'react';
//import './css/_NewsArticleComponent.scss';
import SocialButtonsComponents from './SocialButtonsComponents';
import CommentsComponent from './CommentsComponent';

import data from '../assets/data/news';

class NewsArticleComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let news = data.find(el => el.id === +this.props.articleID);
        
        return (
            <div className="article">
                <h1>
                    {news.headline}
                </h1>
                <div className="addition-data">
                    <i class="far fa-eye"></i>
                    <span>15 хв.</span>
                    <i class="far fa-clock"></i>
                    <span>{news.date}</span>
                </div>
                <article>
                    <p>
                    {news.body}
                    </p>
                </article>
                <SocialButtonsComponents />
                <CommentsComponent />
            </div>
        );
    }
}

export default NewsArticleComponent;