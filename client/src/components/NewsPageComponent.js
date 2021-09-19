import React from 'react';
import './css/NewsPageComponent.scss';

import SubMenu from './SubMenu';
import MainMenu from './MainMenu';
import FooterComponent from './FooterComponent';
import SearchComponent from './SearchComponent';
import NewsArticleComponent from './NewsArticleComponent';
import BreadCrumbsComponent from './BreadCrumbsComponent';
import LastNewsBarComponent from './LastNewsBarComponent';

import { connect } from 'react-redux';
import { fetchSingleNews, fetchNewsShort } from '../redux/ActionCreators';

const mapDispatchToProps = dispatch => ({
    fetchSingleNews: (id) => { dispatch(fetchSingleNews(id)) },
    fetchNewsShort: () => { dispatch(fetchNewsShort()) }
});
  
const mapStateToProps = state => {
    return {
        newsFull: state.news.newsFull,
        newsShort: state.news.newsShort,
        isLoading: state.news.isLoading
    }
}

class MainPageComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            style: 'none'
        }
    }

    componentDidMount() {
        //console.log(this.props.match.params.id);
        window.scrollTo(0, 0);
        this.props.fetchSingleNews(this.props.match.params.id);
        this.props.fetchNewsShort();
    }

    componentWillReceiveProps(nextProps) { 
        if (nextProps.match.params.id !== this.props.match.params.id) {
            this.props.fetchSingleNews(nextProps.match.params.id);
        }
    }

    render() {
        return (
            <div className="grid-for-article-page">
                <SearchComponent open={this.state.style} />
                <SubMenu toggle={(el) => this.setState(el)} />
                <MainMenu toggle={(el) => this.setState(el)} />                
                <BreadCrumbsComponent />
                <NewsArticleComponent articleID={this.props.location.pathname.split('/')[3]} newsFull={this.props.newsFull} isLoading={this.props.isLoading} />
                <LastNewsBarComponent newsShort={this.props.newsShort} isLoading={this.props.isLoading} />
                <FooterComponent />
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainPageComponent);