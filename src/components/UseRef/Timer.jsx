import React from 'react';
import { useRef , useState , useEffect } from 'react';

const Timer = () => {
    const [count , setCount] = useState(0);
    const intervalRef = useRef(null);

    /* side effect */

    /* setInterval என்பது JavaScript-ல் ஒரு நேர இடைவெளியில் குறியிட்ட செயல்பாட்டை (function) மீண்டும் மீண்டும் இயங்க செய்ய பயன்படும் ஒரு method ஆகும். 
    setTimeout மற்றும் setInterval இரண்டிற்கும் வித்தியாசம் உள்ளது:

setTimeout → ஒரு முறை மட்டும் செயல்படும்.
setInterval → தொடர்ச்சியாக செயல்படும்.*/

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setCount((prevCount) => prevCount + 1 )
        }, 1000);

        /* Cleanup function -> clear setInterval() method 
        setInterval நிக்க (stop) செய்ய*/
        return (
            () => {
                clearInterval(intervalRef.current);
            }
        )


    }, []) /* empty dependancies array */
  return (
    <div>
        <h1>Timer : {count} seconds </h1>
        <button onClick={() => clearInterval(intervalRef.current) } >
            Stop Timer
        </button>
    </div>
  )
}

export default Timer