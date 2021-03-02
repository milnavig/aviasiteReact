import React, {Component} from 'react';

class BreadCrumbsComponent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="breadcrumbs">
                <div>
                    <span>Головна</span>
                    <span className="delimetre">/</span>
                    <span>ГОТОВИТСЯ ЗАКАЗ НА 4 САМОЛЕТА АН-74</span>
                </div>
            </div>
        );
    }
}

export default BreadCrumbsComponent;