import React, { useRef } from 'react';

const FocusInput = () => {
    // Creating a reference to the input field
    const inputRef = useRef(null);

    // Function to focus the input field when the button is clicked
    const focusInput = () => {
        if (inputRef.current) {  /* if we have the inputRef current value.. so in this situation.. we are going to be taking that input ref */
            inputRef.current.focus();  // Corrected type from 'foucus' to 'focus'
        }
    };

    return (
        <div>
            {/* Connecting input field to the useRef hook */}
            <input type="text" ref={inputRef} placeholder="Click the button to focus" />
            {/* Button to trigger the focusInput function */}
            <button onClick={focusInput}>Focus Input</button>
        </div>
    );
};

export default FocusInput;
