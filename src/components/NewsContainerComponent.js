import React from 'react';
import './css/NewsContainerComponent.css';

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
                <div className={this.state.styles}><span>{this.props.identifier}</span></div>
                <div className="news-header" onMouseEnter={(e) => this.enterArea(e)} onMouseLeave={(e) => this.leaveArea(e)}>
                    <h3><a href="#">{this.props.header}</a></h3>
                </div>
            </div>
        );
    }
}

export default NewsContainerComponent;