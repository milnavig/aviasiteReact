import React from 'react';
//import './css/_NewsArticleComponent.scss';
import SocialButtonsComponents from './SocialButtonsComponents';
import CommentsComponent from './CommentsComponent';

import data from '../assets/data/news';
import Moment from 'moment';
import Loader from "react-loader-spinner";

class NewsArticleComponent extends React.Component {
    constructor(props) {
        super(props);
    }
    
    insertDataInHTML(news) {
        
        return {__html: news?.body}
    }

    render() {
        // let news = data.find(el => el.id === +this.props.articleID);
        if (this.props.isLoading || this.props.newsFull.length === 0) {
            return (
                    <div className="article">
                        <div className="loader" style={{display: 'flex', justifyContent: 'center'}}>
                            <Loader
                                type="Circles"
                                color="#1049A9"
                                height={100}
                                width={100}
                            />
                        </div>
                    </div>);
        }
        
        let news = this.props.newsFull.find(el => +el.id === +this.props.articleID);
        let date = +(news?.timestamp || 1630861714185);
        date = Moment(date).format("DD.MM.YYYY, hh:mm:ss a"); ;
        console.log(date);
        console.log(this.props.articleID)
        console.log(this.props.newsFull);
        return (
            <div className="article">
                <h1>
                    {news?.headline}
                </h1>
                
                <div className="addition-data">
                    <i className="far fa-eye"></i>
                    <span>15 хв.</span>
                    <i className="far fa-clock"></i>
                    <span>{date}</span>
                </div>
                <article>
                    {
                        news?.img ? <img src={process.env.REACT_APP_API_URL + news.img} style={{width: '100%', height: 'auto'}}/> : null
                    }
                    <p className="post-content" dangerouslySetInnerHTML={this.insertDataInHTML(news)}>
                    
                    </p>
                </article>
                <SocialButtonsComponents />
                <CommentsComponent />
            </div>
        );
    }
}

export default NewsArticleComponent;