import React from 'react';
import data from '../assets/data/news';

import ReactPaginate from 'react-paginate'; // https://github.com/AdeleD/react-paginate

let NewsBlock = (props) => {

    return (
        <div className="news-block">
            <div className="news-block-wrapper">
                <img src={props.data.image} title=""/>
                <div className="content">
                    <h2><a href={props.data.url}>{props.data.headline}</a></h2>
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
            offset: 0
        }
    }

    handlePageClick = (data) => {
        this.setState({ offset: data });
    };

    render() {
        return (
            <div className="list">
                <h1>Останні новини</h1>
                {data.map(news => <NewsBlock data={news}></NewsBlock>)}
                <ReactPaginate
                    previousLabel={''}
                    nextLabel={''}
                    breakLabel={'...'}
                    breakClassName={'break-me'}
                    pageCount={12}
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