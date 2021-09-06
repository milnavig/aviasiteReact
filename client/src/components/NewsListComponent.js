import React from 'react';
import data from '../assets/data/news';

import ReactPaginate from 'react-paginate'; // https://github.com/AdeleD/react-paginate
import Loader from "react-loader-spinner";

import {Link} from "react-router-dom";
import Moment from 'moment';

let NewsBlock = (props) => {
    let date = +(props.data?.timestamp || 1630861714185);
    date = Moment(date).format("DD.MM.YYYY, hh:mm:ss a"); ;

    return (
        <div className="news-block">
            <div className="news-block-wrapper">
                <img src={process.env.REACT_APP_API_URL + props.data.img} title=""/>
                <div className="content">
                    <h2><Link to={"/news/" + props.data.id}>{props.data.headline}</Link></h2>
                    <p>{props.data.description.split(' ').slice(0, 80).join(' ') + '...'}</p>
                </div>
            </div>
            
            <div className="addition-data">
                    <i className="far fa-eye"></i>
                    <span>{"15 хв."}</span>
                    <i className="far fa-clock"></i>
                    <span>{date}</span>
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
        }
    }
    
    handlePageClick = (page) => {  
        this.setState(function(prevState, props){
            return { offset: page.selected }
        });
        
        this.props.changePage(page.selected + 1);
    };

    render() {
        let pageCount = Math.ceil((this.props.pages[this.props.selectedPage] ? this.props.pages[this.props.selectedPage].count : 30) / 5);

        return (!this.props.pages[this.props.selectedPage]) ? (
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
                {this.props.pages[this.props.selectedPage].rows.map((news, index) => <NewsBlock data={news} key={index}></NewsBlock>)}
                <ReactPaginate
                    previousLabel={''}
                    nextLabel={''}
                    breakLabel={'...'}
                    breakClassName={'break-me'}
                    pageCount={pageCount}
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