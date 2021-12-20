import React from "react";
import Validation from "../../validation/Validation";
import NumberFormat from 'react-number-format';

// eslint-disable-next-line react/display-name
const ContactUs = React.forwardRef((_props, ref) => (
    <div className="contact_us">
        <h2 className="contact_us_title">Свяжитесь с нами</h2>
        <h3 className="contact_us_min_title">бесплантый расчет стоимости</h3>
        <div className="contact_us__form" ref={ref}>
            <div className="contact_us__form_men">
                <div className="contact_us__form_men_first"></div>
                <div className="contact_us__form_men_second"></div>
            </div>
            <div className="contact_us__form_form">
                <h3 className="contact_us__form_form_title">Сэкономьте Ваше время и средства!</h3>
                <p className="contact_us__form_form_text">Подберем оборудование по оптовой цене  и рассчитаем стоимость работ!</p>
                <form>
                    <Validation 
                        error={'Укажите пожалуйста ваше имя'} 
                        width="fit-content" 
                        name={true}
                        setValidForm={_props.setValidForm}
                        validForm={_props.validForm}>
                        <input 
                            type="text" 
                            placeholder="Укажите ваше имя"  
                            onChange={(e) => _props.setName(e.target.value)}
                            value={_props.name}/>
                    </Validation>
                   
                    <Validation 
                        phone={true} 
                        error={'Укажите пожалуйста полный номер'} 
                        width='fit-content' 
                        setValidForm={_props.setValidForm}
                        validForm={_props.validForm}>
                        <NumberFormat
                            format="+38 (###) ###-##-##"
                            mask="_"
                            placeholder="Укажите вашь номер"
                            onChange={(e) => _props.setNumberPhone(e.target.value)}
                            value={_props.numberPhone}
                        />
                    </Validation>
                    <Validation 
                        error={'Укажите пожалуйста вашь район (Малиновский, Киевский, Приморский, Суворовский)'} 
                        width="fit-content" 
                        district={true}
                        bottom='-60px'
                        setValidForm={_props.setValidForm}
                        validForm={_props.validForm}>
                      <input 
                        type="text" 
                        placeholder="Укажите ваш район" 
                        value={_props.district} onChange={(e) => _props.setDistrict(e.target.value)}/>   
                    </Validation>
                    <button disabled={Object.values(_props.validForm).filter(el => el !== true).length > 0}>Оставить заявку</button>
                </form>
                <p className="contact_us__form_form_agreement">
                    <input type="checkbox" id="check1" name="check1"/>
                    <label htmlFor="check1">Я согласен с <a href="#">политикой обработки персональных данных</a></label>
                </p>
            </div>
        </div>
</div>
));

export default ContactUs;