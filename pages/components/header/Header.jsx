import React from "react";
import logo from "../../../images/logo.svg";
import Image from 'next/image';
import Head from 'next/head'

const Header = () => {
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
                        <li className="nav_head__list_item">Услуги</li>
                        <li className="nav_head__list_item secondary_list arrow">Наши работы</li>
                        <li className="nav_head__list_item secondary_list arrow">Cтоимость услуг</li>
                        <li className="nav_head__list_item">Контакты</li>
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