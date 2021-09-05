import React from 'react';
import data from '../assets/data/news';

import ReactPaginate from 'react-paginate'; // https://github.com/AdeleD/react-paginate
import Loader from "react-loader-spinner";

import {Link} from "react-router-dom";

let NewsBlock = (props) => {

    return (
        <div className="news-block">
            <div className="news-block-wrapper">
                <img src={props.data.image} title=""/>
                <div className="content">
                    <h2><Link to={"/news/" + props.data.id}>{props.data.headline}</Link></h2>
                    <p>{props.data.body.split(' ').slice(0, 30).join(' ') + '...'}</p>
                </div>
            </div>
            
            <div className="addition-data">
                    <i class="far fa-eye"></i>
                    <span>{"15 хв."}</span>
                    <i class="far fa-clock"></i>
                    <span>{props.data.date}</span>
            </div>
        </div>
    );
}

class NewsListComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            style: 'none',
            offset: {selected: 0},
            isLoading: true,
            pageCount: 0,
            news: []
        }
    }

    componentDidMount() {
        let num_pages = Math.ceil(data.length / 10);
        this.setState({ pageCount: num_pages, isLoading: false });
    }

    handlePageClick = (page) => {  
        this.setState({ offset: page });  
    };

    render() {
        return this.state.isLoading ? (
            <div className="list">
                <div className="loader">
                    <Loader
                        type="Circles"
                        color="#1049A9"
                        height={100}
                        width={100}
                        
                    />
                </div>
            </div>
            
        ) : (
            <div className="list">
                <h1>Останні новини</h1>
                {data.slice(this.state.offset.selected*10, this.state.offset.selected*10 + 10).map((news, index) => <NewsBlock data={news} key={index}></NewsBlock>)}
                <ReactPaginate
                    previousLabel={''}
                    nextLabel={''}
                    breakLabel={'...'}
                    breakClassName={'break-me'}
                    pageCount={this.state.pageCount}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={this.handlePageClick}
                    containerClassName={'pagination'}
                    activeClassName={'active'}
                    pageClassName={'pagination-li'}
                    pageLinkClassName={'pagination-a'}
                    previousClassName={'pagination-previous-li'}
                    previousLinkClassName={'pagination-previous-a'}
                    nextClassName={'pagination-next-li'}
                    nextLinkClassName={'pagination-next-a'}
                />
            </div>
        );
    }
}

export default NewsListComponent;