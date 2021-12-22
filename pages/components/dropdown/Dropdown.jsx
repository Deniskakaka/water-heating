import React from "react";

const Dropdown = ({ arrayItem = [], index, open, color }) => {
    return (
        <ul className={`dropdown_list ${open === index ? 'show' : 'close'}`}>
            {
              arrayItem.map((el, i) => {
                return <li 
                    className="dropdown_list_item" 
                    key={i} 
                    style={{
                        marginTop: i === 0 && '10px', 
                        color: color, 
                        fontWeight: color === '#FFD900' && '750'}
                    }>
                    {el}
                </li>})  
            }
        </ul>    
    )
};

export default Dropdown;