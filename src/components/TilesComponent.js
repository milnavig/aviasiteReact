import React, {Component} from 'react';
//import './css/TilesComponent.css';
import plane1 from '../assets/images/plane1.png';
import plane2 from '../assets/images/plane2.png';
import plane3 from '../assets/images/plane3.png';
import NewsBarComponent from './NewsBarComponent';

class TilesComponent extends Component {
    render() {
        return (
            <div id="wrapper">
                <div id="plane-1" className="hover" style={{backgroundImage: `url(${plane3})`}}>
                    <div className="plane-name">Ан-2</div>
                    <div className="wrapper-2">
                        <a href="#" className="plane-info">
                            <h4>Ан-2</h4>
                            <p>Ан-2 — советский лёгкий многоцелевой самолёт. Представляет собой поршневой однодвигательный биплан с расчалочным крылом. Оборудован       двигателем АШ-62ИР конструкции А. Д. Швецова.
                            </p>
                        </a>
                    </div>
                </div>
                <div id="plane-2" className="hover" style={{backgroundImage: `url(${plane2})`}}>
                    <div className="plane-name">А-22LS</div>
                    <div className="wrapper-2">
                        <a href="#" className="plane-info">
                            <h4>Аэропракт А-22LS</h4>
                            <p>А-22LS — является глубокой модификацией самолета А-22. Геометрия планера A-22LS такая же как и у А-22L. Конструкция переработана для расчетного взлетного веса 600 кг — в сухопутном варианте и 650 кг — в варианте на поплавках, в соответствии с требованиями категории LSA (Light Sport Airplane).
                            </p>
                        </a>
                    </div>
                </div>
                <div id="plane-3" className="hover" style={{backgroundImage: `url(${plane1})`}}>
                    <div className="plane-name">А-36</div>
                    <div className="wrapper-2">
                        <a href="#" className="plane-info">
                            <h4>Аэропракт А-36</h4>
                            <p>A-36 — двухмоторный, двухместный самолет, являющийся развитием идеи самолетов А-26. С целью увеличения дальности полета на А-36 установлены два четырехтактных двигателя Rotax-912S. А-36 предназначен для полётов над территориями, где вынужденная посадка по причине отказа двигателя чрезвычайно нежелательна или невозможна (море, горы, лес, пустыня и т.п.).<br/><br/>
                            Самолет имеет смешанную конструкцию (цельнометаллические крыло, оперение, хвостовая балка и стеклопластиковые передняя часть фюзеляжа, капоты двигателей, зализы). А-36 оснащен цельноповоротным горизонтальным оперением, электромеханическими триммерами рулей высоты и направления, боковой ручкой управления. На А-36 возможен взлет и продолжение полета на одном из двигателей.
                            </p>
                        </a>
                    </div>
                </div>
                <NewsBarComponent></NewsBarComponent>
            </div>
        );
    }
}

export default TilesComponent;