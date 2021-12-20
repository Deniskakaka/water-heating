import React  from "react";
import NumberFormat from 'react-number-format';
import Validation from '../../validation/Validation';

const Consultation = ({ 
    scroll, 
    numberPhone, 
    tabNumber, 
    tabDistrict,
}) => {
    return (
        <div className="consultstion_wrapper">
            <div className="white_back"></div>
            <div className="consultstion_wrapper__info">
                <h1 className="consultstion_wrapper__info_title">Монтаж отопительных систем, канализации и водоснабжения</h1>
                <div className="cost">
                    <div className="cost__calculate">
                        <p className="cost__calculate_info">Подберем и установим инженерные системы любой сложности по оптовой цене</p>
                        <button className="cost__calculate_button"
                            onClick={() => scroll()}>Узнать стоимость работ
                        </button>
                    </div>
                    <div className="cost__consultation">
                        <h3 className="cost__consultation__title">Получите бесплатную Консультацию</h3>
                        <span className="cost__consultation_text">расчет стоимости за 5 минут</span>
                             <div className="styled-select">
                                <select 
                                    className="select_district"
                                    onChange={(e) => tabDistrict(e)}>
                                    <option value="" disabled selected>выберети вашь район</option>
                                    <option>Приморский</option>
                                    <option>Киевский</option>
                                    <option>Малиновский</option>
                                    <option>Суворовский</option>
                                </select>   
                            </div>
                        <Validation phone={true} error={'Укажите пожалуйста полный номер'} width="100%">
                            <NumberFormat
                                className="select_district number_phone" 
                                format="+38 (###) ###-##-##"
                                mask="_"
                                placeholder="Укажите вашь номер"
                                onChange={(e) => tabNumber(e)}
                                value={numberPhone}
                            />
                        </Validation>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Consultation;