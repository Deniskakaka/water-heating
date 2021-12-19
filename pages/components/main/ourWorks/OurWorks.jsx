import React from "react";
import Image from 'next/image';

import first_image from "../../../../images/first_image.png";
import second_image from "../../../../images/second_image.png";
import three_image from "../../../../images/three_image.png";
import four_image from "../../../../images/four_image.png";
import five_image from "../../../../images/five_image.png";
import six_image from "../../../../images/six_image.png";
import seven_image from "../../../../images/seven_image.png";
import eight_image from "../../../../images/eight_image.png";

const OurWorks = () => {
    return (
        <div className="works">
            <h2 className="works__title">Наши работы</h2>
            <div className="works__content">
                <div className="works__content_item"><Image src={first_image} alt="first_image"/></div>
                <div className="works__content_item"><Image src={second_image} alt="second_image"/></div>
                <div className="works__content_item"><Image src={three_image} alt="three_image"/></div>
                <div className="works__content_item"><Image src={four_image} alt="four_image"/></div>
                <div className="works__content_item"><Image src={five_image} alt="five_image"/></div>
                <div className="works__content_item"><Image src={six_image} alt="six_image"/></div>
                <div className="works__content_item"><Image src={seven_image} alt="seven_image"/></div>
                <div className="works__content_item"><Image src={eight_image} alt="eight_image"/></div>
            </div>
        </div>
    )
};

export default OurWorks;