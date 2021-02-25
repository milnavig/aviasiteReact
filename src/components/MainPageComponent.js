import React from 'react';
import './css/MainPageComponent.scss';

import SubMenu from './SubMenu';
import MainMenu from './MainMenu';
import PosterComponent from './PosterComponent';
import HeaderComponent from './HeaderComponent';
import TilesComponent from './TilesComponent';
import SliderParentComponent from './SliderParentComponent';
import {default as R} from './ReviewComponent';
import ContactsComponent from './ContactsComponent';
import FooterComponent from './FooterComponent';
import SearchComponent from './SearchComponent';

class MainPageComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            style: 'none'
        }
    }

    render() {
        return (
            <>
                <SearchComponent open={this.state.style} />
                <SubMenu toggle={(el) => this.setState(el)} />
                <MainMenu toggle={(el) => this.setState(el)} />
                <PosterComponent />
                <HeaderComponent title="Наші літаки" identifier="planes-header"/>
                <TilesComponent />
                <HeaderComponent title="Галерея" identifier="gallery-header"/>
                <SliderParentComponent />
                <HeaderComponent title="Відгуки клієнтів" identifier="feedback-header"/>
                <R></R>
                <HeaderComponent title="Контакти" identifier="contacts-header"/>
                <ContactsComponent></ContactsComponent>
                <FooterComponent />
            </>
        );
    }
}

export default MainPageComponent;