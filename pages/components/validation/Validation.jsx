import React, { useEffect, useState } from "react";

const Validation = ({ children, phone, error, width, district, bottom, setValidForm, validForm, name }) => {
    const [valid, setValid] = useState(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    let phoneno = /^\+\d\d\s\(\d{3}\)\s\d{3}-\d{2}-\d{2}/g;
    // eslint-disable-next-line react-hooks/exhaustive-deps
    let nameValid = /([а-яА-яa-zA-z])/ig;

    const [listValidDistrict] = useState(['приморский', 'киевский', 'малиновский', 'суворовский']);

    useEffect(() => {
       if (phone && children.props.value !== '') {
        setValid(children.props.value.match(phoneno) !== null);
        if (children.props.value.length < 1 ) setValid(true);
        if (children.props.value !== '' && valid && setValidForm && validForm.phone === '') setValidForm({
            ...validForm,
            phone: true
        })
       }
       if (district) {
           if (listValidDistrict.includes(children.props.value.trim().toLowerCase()) || children.props.value === '') {
               setValid(true);
           } else {
               setValid(false);
           }
           if (listValidDistrict.includes(children.props.value.trim().toLowerCase())) {
            if (validForm.district === '') {
                setValidForm({
                    ...validForm,
                    district: true
                })
            }
           }
       }
       if (name) {
         if (children.props.value === '') {
            setValid(false);
            if (validForm.name === '') {
                setValidForm({
                ...validForm,
                name: true
                }); 
            }
         }
         else if (children.props.value !== '' && children.props.value.match(nameValid) !== null && children.props.value.length > 1) setValid(true);
         else {
            setValid(false);
            if (validForm.name === '') {
                setValidForm({
                ...validForm,
                name: true
                }); 
            }
         } 
       }
    } , [children, children.props.value, district, listValidDistrict, name, nameValid, phone, phoneno, setValidForm, valid, validForm]);

    return (
        <div className="validation" style={{width: width}}>
            {children}
            {!valid && phone && children.props.value !== '' && <p className="validation__error">{error}</p>}
            {!valid && district && <p className="validation__error" style={{bottom: bottom}}>{error}</p>}
            {!valid && name && <p className="validation__error">{error}</p>}
        </div>
    )
};

export default Validation;