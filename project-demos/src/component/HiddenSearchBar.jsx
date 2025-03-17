import React, { useState } from 'react';
import { FaSearch } from "react-icons/fa";

const HiddenSearchbar = () => {
    const [showInput, setShowInput] = useState(false);
    const [bgColor, setBgColor] = useState('white');

    const handleClick = (e) => {
        if (e.target.className === "container") {
            setShowInput(false);
            setBgColor("white");
        }
    };

    return (
        <section 
            className="container"
            style={{ backgroundColor: bgColor, padding: "10px", display: "flex", alignItems: "center", gap: "10px" }}
            onClick={handleClick}
        >
            {showInput ? (
                <input 
                    type="text" 
                    placeholder="Search..." 
                    autoFocus
                    onBlur={() => {
                        setShowInput(false);  // Hide input when clicking outside
                        setBgColor("white");
                    }}
                />
            ) : (
                <FaSearch 
                    onClick={() => {
                        setShowInput(true); // Show input when clicking the icon
                        setBgColor("black");
                    }} 
                    style={{ cursor: "pointer", color: "red" }}
                />
            )}
        </section>
    );
};

export default HiddenSearchbar;
