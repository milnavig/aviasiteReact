import React from 'react';
import './css/NewsListPageComponent.scss';

import SubMenu from './SubMenu';
import MainMenu from './MainMenu';
import FooterComponent from './FooterComponent';
import SearchComponent from './SearchComponent';
import NewsListComponent from './NewsListComponent';

import LastNewsBarComponent from './LastNewsBarComponent';

import { connect } from 'react-redux';
import { fetchNewsShort, fetchNewsSet } from '../redux/ActionCreators';

const mapDispatchToProps = dispatch => ({
    fetchNewsSet: (page, limit) => { dispatch(fetchNewsSet(page, limit)) },
    fetchNewsShort: () => { dispatch(fetchNewsShort()) }
});
  
const mapStateToProps = state => {
    return {
        newsShort: state.news.newsShort,
        pages: state.news.pages,
        isLoading: state.news.isLoading
    }
}

class NewsListPageComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            style: 'none',
            selectedPage: 1
        }
    }

    componentDidMount() {
        window.scrollTo(0, 0);
        this.props.fetchNewsShort();
        this.props.fetchNewsSet(this.state.selectedPage, 5);
    }

    changePage(page) {
        this.setState({...this.state, selectedPage: page});
        console.log(page)
        this.props.fetchNewsSet(page, 5);
    }

    render() {
        console.log(this.props.pages)
        return (
            <div className="grid-for-list-page">
                <SearchComponent open={this.state.style} />
                <SubMenu toggle={(el) => this.setState(el)} />
                <MainMenu toggle={(el) => this.setState(el)} />                
                
                <NewsListComponent changePage={(p) => this.changePage(p)} pages={this.props.pages} selectedPage={this.state.selectedPage}/>
                <LastNewsBarComponent newsShort={this.props.newsShort} isLoading={this.props.isLoading} />
                <FooterComponent />
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewsListPageComponent);