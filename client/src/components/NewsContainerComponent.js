import React from 'react';
//import './css/NewsContainerComponent.css';
import data from '../assets/data/news';
import {Link} from "react-router-dom";

class NewsContainerComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            styles: "news-count"
        }
    }

    enterArea(e) {
        let current_state = this.state;
        this.setState({
            styles: current_state.styles + " " + "news-hover"
        });
    }

    leaveArea(e) {
        let current_state = this.state;
        this.setState({
            styles: current_state.styles.split(' ')[0]
        });
    }

    render() {
        return (
            <div className="news-wrapper">
                <div className={this.state.styles}><span>{this.props.pos}</span></div>
                <div className="news-header" onMouseEnter={(e) => this.enterArea(e)} onMouseLeave={(e) => this.leaveArea(e)}>
                    <h3><Link to={process.env.PUBLIC_URL + "/news/" + this.props.identifier}>{this.props.header}</Link></h3>
                </div>
            </div>
        );
    }
}

export default NewsContainerComponent;