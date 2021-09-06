import React, {Component} from 'react';
import triangle from '../assets/images/breadcrumb.svg';

class BreadCrumbsComponent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="breadcrumbs">
                <div>
                    <span><i className="fas fa-home"></i> <a href="#">Головна</a></span>
                    <span className="delimiter">/</span>
                    <span><a href="#">ГОТОВИТСЯ ЗАКАЗ НА 4 САМОЛЕТА АН-74</a></span>
                    
                </div>
                <img src={triangle} />
            </div>
        );
    }
}

export default BreadCrumbsComponent;