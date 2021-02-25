import React, {Component} from 'react';
//import './css/ContactsComponent.scss';

class ContactsComponent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <footer id="footer-1">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2542.568842746889!2d30.4432964189029!3d50.41187241083988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4c9478d439dcb%3A0x27666bcb99529f88!2z0JzRltC20L3QsNGA0L7QtNC90LjQuSDQsNC10YDQvtC_0L7RgNGCICLQmtC40ZfQsiIg0ZbQvC4g0KHRltC60L7RgNGB0YzQutC-0LPQviAo0JbRg9C70Y_QvdC4KQ!5e0!3m2!1suk!2sua!4v1552158630720" frameBorder="0" allowFullScreen></iframe>
                </footer>
                <footer id="footer-2">
                    <div id="location">
                        <i className="fas fa-map-marker-alt icon"></i>
                        <span>Международный аэропорт Киев Жуляны, вулиця Медова, Київ</span>
                    </div>
                    <div id="calendar">
                        <i className="far fa-calendar-check icon"></i>
                        <span>Понедельник, Вторник, Среда</span>
                    </div>
                    <div id="watches">
                        <i className="far fa-clock icon"></i>
                        <span>Понедельник: 11.00 - 18.00, Вторник, Среда: 12.00 - 19.30</span>
                    </div>
                    <div id="telephone">
                        <i className="fas fa-mobile-alt icon"></i>
                        <span>+38 094 84 77</span>
                    </div>
                    <div id="email">
                        <i className="fas fa-envelope icon"></i>
                        <span>airclub@gmail.com</span>
                    </div>
                </footer>
            </>
        );
    }

}

export default ContactsComponent;