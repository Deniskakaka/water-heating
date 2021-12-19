import React, { useRef, useState } from "react";
import Consultation from "./consultation/Consultation";
import OurService from "./our_service/OurService";
import FiveSteps from "./fiveSteps/FiveSteps";
import OurWorks from "./ourWorks/OurWorks";
import CostServers from "./cost_servers/CostServers";
import ContactUs from "./contact_us/ContactUs";

const Main = () => {
    const [district, setDistrict] = useState('');
    const [numberPhone, setNumberPhone] = useState('');
    const ref = useRef(null);

    const executeScroll = () => ref.current.scrollIntoView();
    return (
        <section>
           <Consultation 
            scroll={executeScroll} 
            setDistrict={setDistrict} 
            setNumberPhone={setNumberPhone}
            numberPhone={numberPhone}
           />
           <OurService/>
           <FiveSteps/>
           <OurWorks/>
           <CostServers/>
           <ContactUs 
            ref={ref} 
            district={district} 
            numberPhone={numberPhone}
            setNumberPhone={setNumberPhone}
            setDistrict={setDistrict}/>
        </section>
    )
};

export default Main;