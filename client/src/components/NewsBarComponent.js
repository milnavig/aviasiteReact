import React from 'react';
//import './css/NewsBarComponent.css';
import NewsContainerComponent from './NewsContainerComponent';
import {Link} from "react-router-dom";

import { connect } from 'react-redux';
import { actions } from 'react-redux-form';
import { addNewsShort, fetchNewsShort } from '../redux/ActionCreators';

import data from '../assets/data/news';

const mapDispatchToProps = dispatch => ({
    fetchNewsShort: () => { dispatch(fetchNewsShort())}
});
  
const mapStateToProps = state => {
    return {
        newsShort: state.news.newsShort,
        isLoading: state.news.isLoading
    }
}
  

class NewsBarComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        //console.log(this.props.isLoading);
        this.props.fetchNewsShort();
      }

    fillWithData() {
        if (this.props.isLoading || this.props.newsShort.length === 0) {
            return <h3>No data</h3>;
        }
        let arr = [];
        for (let i = 0; i < 9; i++) {
            arr.push(<NewsContainerComponent key={i} pos={i + 1} header={this.props.newsShort[i].headline} identifier={this.props.newsShort[i].id} />)
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

export default connect(mapStateToProps, mapDispatchToProps)(NewsBarComponent);