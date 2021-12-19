import React from "react";
import Image from 'next/image';
import discount from "../../../../images/discount.svg";
import quality from "../../../../images/quality.svg";
import delivery from "../../../../images/delivery.svg";
import guarantees from "../../../../images/guarantees.svg";
import pipes from "../../../../images/pipes.svg";
import warmFloor from "../../../../images/warmFloor.svg";
import waterSupply from "../../../../images/waterSupply.svg";
import battery from "../../../../images/battery.svg";

const OurService = () => {
    return (
        <div className="our_service">
            <div className="our_service__benefits">
                <div className="our_service__benefits_item">
                    <Image src={quality} alt="quality"/>
                    <span>Высокое качество</span>
                </div>
                <div className="our_service__benefits_item">
                    <Image src={delivery} alt="delivery"/>
                    <span>Бесплатная доставка</span>
                </div>
                <div className="our_service__benefits_item">
                    <Image src={guarantees} alt="guarantees"/>
                    <span>Гарантийное обслуживание</span>
                </div>
                <div className="our_service__benefits_item">
                    <Image src={discount} alt="discount"/>
                    <span>Скидки постоянным клиентам</span>
                </div>
            </div>
            <div className="our_service__describe">
                <h2 className="our_service__describe_title">Наши услуги</h2>
                <h3 className="our_service__describe_small_title">по честной цене и  без предоплат!</h3>
                <div className="our_service__describe_details">
                    <div className="describe">
                        <div className="describe__images">
                            <div className="describe__images_item">
                                <Image src={battery} alt="battery"/>
                                <span>Отопление</span>
                            </div>
                            <div className="describe__images_item">
                                <Image src={waterSupply} alt="waterSupply"/>
                                <span>Водоснабжение</span>
                            </div>
                            <div className="describe__images_item">
                                <Image src={pipes} alt="pipes"/>
                                <span>Канализация</span>
                            </div>
                            <div className="describe__images_item">
                                <Image src={warmFloor} alt="warmFloor"/>
                                <span>Теплые полы</span>
                            </div>
                        </div>
                        <hr/>
                        <div className="describe__text">
                            <h4 className="describe__text_title">Отопление под ключ</h4>
                            <p className="describe__text__describe">Монтаж отопления осуществляет профкссиональный инженер монтажных коммуникаций по отоплению,
                                в любых жилых помещениях: в частных домах и коттеджах, торговых и офисных зданиях.
                            </p>
                        </div>
                        </div>
                </div>
            </div>
        </div>
    )
};

export default OurService;