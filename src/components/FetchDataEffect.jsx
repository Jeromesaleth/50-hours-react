import React, { useEffect, useState } from 'react'

const FetchDataEffect = () => {

    const [posts, setPosts] = useState([]);
    useEffect(() => {
        const FetchData = async () => {
            const response = await fetch("https://jsonplaceholder.typicode.com/todos");

            const data = await response.json();
            setPosts(data)
        };
        FetchData();
    }, []);

    /* or more Good way of used useeffect and asnyn function
    
    useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/todos"); // API-யை fetch செய்கிறது
      const data = await response.json(); // JSON data-ஆ மாற்றுகிறது
      setPosts(data); // State-ல் data save செய்கிறது
    } catch (error) {
      console.error("Error fetching data:", error); // Error handle செய்கிறது
    }
  };

  fetchData(); // `useEffect`-க்கு உள்ளே function-ஐ call செய்கிறோம்
}, []);


    */
    return (
        <div>
            <h1>First Post Title :</h1>
        { posts.length > 0 ? <h2>{posts[0].title}</h2> : <p>Loading ....</p> }
        </div>
    )

  
}

export default FetchDataEffect