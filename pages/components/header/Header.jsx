import React, { useState } from "react";
import logo from "../../../images/logo.svg";
import Image from 'next/image';
import Head from 'next/head';
import Dropdown from "../dropdown/Dropdown";

const Header = () => {
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
        <header>
            <Head>
                <title>Water Heating</title>
                <meta charset="UTF-8"/>
                <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            </Head>
            <div className="header_content">
                <div className="logo">
                    <Image src={logo} alt="logo" />
                </div>
                <nav className="nav_head">
                    <ul className="nav_head__list">
                    {list.map((el, indx) => <li 
                            className="nav_head__list_item"
                            key={indx}
                            onClick={() => switchMenu(indx)}>
                                {el.name}
                                <Dropdown arrayItem={el.items} index={indx} open={index} color={el.color}/>
                            </li>)}
                    </ul>
                </nav>
                <a href="tel:+380 93 015 0800" className="phone">
                    <span className="phone_number">+380 93 015 0800</span>
                </a>
            </div>
        </header>
    )
}

export default Header;