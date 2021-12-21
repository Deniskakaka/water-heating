import React, {useEffect, useRef, useState } from "react";
import Consultation from "./consultation/Consultation";
import OurService from "./our_service/OurService";
import FiveSteps from "./fiveSteps/FiveSteps";
import OurWorks from "./ourWorks/OurWorks";
import CostServers from "./cost_servers/CostServers";
import ContactUs from "./contact_us/ContactUs";

const Main = () => {
    const [district, setDistrict] = useState('');
    const [numberPhone, setNumberPhone] = useState('');
    const [name, setName] = useState('');
    const [validForm, setValidForm] = useState({phone: '', district: '', name: ''});

    const ref = useRef(null);

    const tabName = (e) => {
        setName(e.target.value);
    }
    
    const tabNumber = (e) => {
        setNumberPhone(e.target.value);
    }

    const tabDistrict = (e) => {
        setDistrict(e.target.value)
    };

    const executeScroll = () => ref.current.scrollIntoView();

    return (
        <section>
           <Consultation 
            scroll={executeScroll} 
            tabDistrict={tabDistrict}
            numberPhone={numberPhone}
            tabNumber={tabNumber}
            district={district}
           />
           <OurService/>
           <FiveSteps/>
           <OurWorks/>
           <CostServers/>
           <ContactUs 
            ref={ref} 
            district={district} 
            numberPhone={numberPhone}
            name={name}
            setName={setName}
            setNumberPhone={setNumberPhone}
            setDistrict={setDistrict}
            setValidForm={setValidForm}
            validForm={validForm}/>
        </section>
    )
};

export default Main;