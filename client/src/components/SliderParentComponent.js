import React from 'react';
import SliderComponent from './SliderComponent';
import img1 from '../assets/images/slider_pic/1.jpg';
import img2 from '../assets/images/slider_pic/2.jpg';
import img3 from '../assets/images/slider_pic/3.jpg';
import img4 from '../assets/images/slider_pic/4.jpg';
import img5 from '../assets/images/slider_pic/5.jpg';

import { connect } from 'react-redux';
import { fetchImages } from '../redux/ActionCreators';

const mapDispatchToProps = dispatch => ({
    fetchImages: () => { dispatch(fetchImages()) }
});
  
const mapStateToProps = state => {
    return {
        images: state.news.images
    }
}

let data = [
    img1,
    img2,
    img3,
    img4,
    img5
];

class SliderParentComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchImages();
    }

    render() {
        /*
        return (
            <div className='parent' id='slider'>
                <SliderComponent>
                    {this.props.images ? this.props.images.map((value, id) => {
                            return (
                                <div key={id} className='child'>
                                    <img src={process.env.REACT_APP_API_URL + value.img} title="" />
                                </div>
                            );
                    }) : null}
                </SliderComponent>
            </div>
        );
        */

        return (
            <div className='parent' id='slider'>
                <SliderComponent>
                    {data.map((value, id) => {
                            return (
                                <div key={id} className='child'>
                                    <img src={value} title="" />
                                </div>
                            );
                    })}
                </SliderComponent>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SliderParentComponent);