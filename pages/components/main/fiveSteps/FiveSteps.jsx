import React from "react";
import Image from 'next/image';
import consultation from "../../../../images/consultation.svg";
import measurements from "../../../../images/measurements.svg";
import contracts from "../../../../images/contracts.svg";
import setting from "../../../../images/setting.svg";
import delivering from "../../../../images/delivering.svg";


const FiveSteps = () => {
    return (
        <div className="five_step">
            <h2 className="five_step_title">Сделаем Ваш дом комфортным за</h2>
            <span className="five_step_min_title">5 шагов</span>
            <div className="five_step__images">
                <div className="five_step__images_item">
                    <span className="image_number">01</span>
                    <div className="five_step__images_item_content">
                        <Image src={consultation} alt="consultation" width={219} height={289}/>
                        <p>Проконсультируем Вас по всем вопросам</p>
                    </div>
                </div>
                <div className="five_step__images_item">
                    <span className="image_number">02</span>
                    <div className="five_step__images_item_content">
                        <Image src={measurements} alt="measurements" width={219} height={289}/>
                        <p>Выполним замеры и составим смету</p>
                    </div>
                </div>
                <div className="five_step__images_item">
                    <span className="image_number">03</span>
                    <div className="five_step__images_item_content">
                        <Image src={delivering} alt="delivering" width={219} height={289}/>
                        <p>Подберем и доставим оборудование</p>
                    </div>
                </div>
                <div className="five_step__images_item">
                    <span className="image_number">04</span>
                    <div className="five_step__images_item_content">
                        <Image src={setting} alt="setting" width={219} height={289}/>
                        <p>Установим все системы и научим пользоваться</p>
                    </div>
                </div>
                <div className="five_step__images_item">
                    <span className="image_number">05</span>
                    <div className="five_step__images_item_content">
                        <Image src={contracts} alt="contracts" width={219} height={289}/>
                        <p>Подпишем акт выполненных работ и дадим гарантию</p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default FiveSteps;