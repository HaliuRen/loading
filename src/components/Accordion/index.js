import { useState } from "react";
import './Accordion.css';

export const Accordion = ( { variant = 'default', items } ) => {

    const [activeIndex, setActiveIndex] = useState(null);

    const handleClick = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
    };

    const variantsListItem = {
        "primary": "accordion-item primary",
        "secondary": "accordion-item secondary",
        "success": "accordion-item success",
        "danger": "accordion-item danger",
        "warning": "accordion-item warning",
        "info": "accordion-item info",
        "light": "accordion-item light",
        "dark": "accordion-item dark"
    }

    const variantsListHeader = {
        "primary": "accordion-header primary",
        "secondary": "accordion-header secondary",
        "success": "accordion-header success",
        "danger": "accordion-header danger",
        "warning": "accordion-header warning",
        "info": "accordion-header info",
        "light": "accordion-header light",
        "dark": "accordion-header dark"
    }

    const variantSelectedItem = variantsListItem[variant] || "accordion-item";
    const variantSelectedHeader = variantsListHeader[variant] || "accordion-header";

    return (
        <div className="accordion">
            {items.map((item, index) => (
                <div key={index} className={`${variantSelectedItem}`}>
                    <div
                        className={`${variantSelectedHeader} ${index === activeIndex ? 'active' : ''}`}
                        onClick={() => handleClick(index)}
                    >
                        {item.header}
                    </div>
                    {index === activeIndex && (
                        <div className="accordion-body">
                            {item.body}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );

}

export default Accordion;