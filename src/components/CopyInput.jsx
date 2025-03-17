

import { useState } from "react";

export default function CopyInput() {
  const [inputValue, setInputValue] = useState('');
  const [copies, setCopies] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(inputValue).then(() => {
      setCopies(true);
      setTimeout(() => {
        setCopies(false); // reset copies state after 2 seconds
      }, 2000);
    });
  };

  return (
    <section>
      <input 
        type="text" 
        value={inputValue} 
        onChange={(e) => setInputValue(e.target.value)} 
      />
      <button onClick={handleCopy}>Copy</button>
      {copies && <span>Copied!</span>} {/* Optional: You can show a "Copied!" message */}
    </section>
  );
}
