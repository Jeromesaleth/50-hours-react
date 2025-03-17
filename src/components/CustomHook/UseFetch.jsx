import { useState , useEffect } from "react";

const UseFetch = (url) => {
    const [data , setData] = useState(null);


useEffect(() => {
    fetch(url)
    .then((res) => res.json())
    .then((data) => setData(data))
}, []);

return(
    [data]   /* providing data's in array */
     /* all functionslitty store in store aray data */
)
}
export default UseFetch;