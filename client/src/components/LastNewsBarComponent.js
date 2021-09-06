import React, {Component} from 'react';
import './css/_LastNewsBarComponent.scss';
import img1 from '../assets/images/news/1.jpg';
import img2 from '../assets/images/news/2.jpg';
import { NavLink } from 'react-router-dom';

function LastNewsBarComponent(props) {
    let news = props.newsShort.length <= 4 ? props.newsShort : props.newsShort.slice(0, 3);
    console.log(news)

    return (
        <div className="news-list-bar"> 
            <h2>ОСТАННІ НОВИНИ</h2>
            {
                news.map((el, id) => 
                    <div className="news-list-item" key={id}>
                        <NavLink to={'/news/' + el.id} style={{color: 'black', textDecoration: "none"}} >
                            <img src={process.env.REACT_APP_API_URL + el.img} title=""/>
                            <h3>{el.headline}</h3>
                            <p>{el.description.length <= 50 ? el.description : el.description.split('').slice(0, 50).join('') + '...'}</p>
                        </NavLink>
                    </div>
                )
            }
            
        </div>
    );
}

export default LastNewsBarComponent;