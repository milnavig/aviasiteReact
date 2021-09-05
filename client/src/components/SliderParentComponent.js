import React from 'react';
import SliderComponent from './SliderComponent';
import img1 from '../assets/images/slider_pic/1.jpg';
import img2 from '../assets/images/slider_pic/2.jpg';
import img3 from '../assets/images/slider_pic/3.jpg';
import img4 from '../assets/images/slider_pic/4.jpg';
import img5 from '../assets/images/slider_pic/5.jpg';

function SliderParentComponent(props) {
    let data = [
        img1,
        img2,
        img3,
        img4,
        img5
    ];

    let data2 = [
        'Apple',
        'Ball',
        'Cat',
        'Dog',
        'Elephant',
        'Fruits',
        'Gorilla',
        'Horse',
        'Ink',
        'Jug',
        'Kite',
        'Lemon',
        'Orange',
        'Paddy',
        'Queen',
        'Rose',
        'Street',
        'Tuesday',
        'Umbrella',
        'Vanilla',
        'Wax',
        'Xerox',
        'Yarn',
        'Zebra'
    ];

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

export default SliderParentComponent;