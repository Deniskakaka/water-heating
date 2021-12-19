import React, { useState } from "react";
import Image from 'next/image';
import Dropdown from "../dropdown/Dropdown";
import logo from "../../../images/logo.svg";
import Facebook from "../../../images/Facebook.svg";
import Instagram from "../../../images/Instagram.svg";
import Telegram from "../../../images/Telegram.svg";

const Footer = () => {
    const [list] = useState([
    {
        name: 'Услуги',
        items: ['Отопление', 'Водоснабжение', 'Канализация', 'Теплые полы'],
        color: '#39435E'
    },
    {
        name: 'Наши работы',
        items: ['Галерея наших работ'],
        color: '#39435E'
    },
    {
        name: 'Cтоимость услуг',
        items: ['Водоснабжение', 'Теплотехника', 'честные цены без предоплат'],
        color: '#39435E'
    },
    {
        name: 'Контакты',
        items: ['+380 93 015 0800'],
        color: '#FFD900'
    }
    ]);
    const [index, setIndex] = useState(-1);

    const switchMenu = (number) => {
        if (index !== number)  setIndex(number);
        else  setIndex(-1);
    }

    return (
        <footer>
            <div className="content_footer">
                <div className="wrapper_logo">
                    <Image src={logo} alt="logo" />
                    <p className="wrapper_logo_text">Инженерные системы любой сложности</p>
                </div>
                <nav className="nav_footer">
                    <ul className="nav_footer__list">
                        {list.map((el, indx) => <li 
                            className="nav_footer__list_item"
                            key={indx}
                            onClick={() => switchMenu(indx)}>
                                {el.name}
                                <Dropdown arrayItem={el.items} index={indx} open={index} color={el.color}/>
                            </li>)}
                    </ul>
                </nav>
                <div className="social-networks">
                    <a href="#"><Image src={Facebook} alt="facebook" /></a>
                    <a href="#"><Image src={Instagram} alt="instagram" /></a>
                    <a href="tel:+0930150800"><Image src={Telegram} alt="telegram" /></a>
                </div>
                <span className="time">© 2021, Odessa</span>
            </div>
        </footer>
    )
};

export default Footer;