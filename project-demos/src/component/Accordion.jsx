import React, { useState } from 'react';
import "../style/Accordion.css"

const Accordion = ({ title, content }) => {
    const [isActive, setIsActive] = useState(false);

    return (
        <section className="accordion-card">
            <div className="header" onClick={() => setIsActive(!isActive)}>
                <h1>{title}</h1>
                <p className='icon'> {isActive ? '-' : '+'}</p>
            </div>
            {isActive && <p className="content">{content}</p>}
        </section>
    );
};

export default Accordion;
