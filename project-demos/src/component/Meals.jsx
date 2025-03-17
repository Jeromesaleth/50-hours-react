import React, { useState, useEffect } from 'react';
import axios from 'axios';

const styles = {
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '20px',
        padding: '20px',
    },
    card: {
        width: '250px',
        border: '1px solid #ddd',
        borderRadius: '10px',
        overflow: 'hidden',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
        textAlign: 'center',
        backgroundColor: '#fff',
    },
    image: {
        width: '100%',
        height: '150px',
        objectFit: 'cover',
    },
    content: {
        padding: '10px',
    },
    title: {
        fontSize: '16px',
        fontWeight: 'bold',
        margin: '10px 0',
    },
    id: {
        fontSize: '14px',
        color: '#555',
    }
};

const Meals = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        axios.get("https://www.themealdb.com/api/json/v1/1/search.php?s=")
            .then(res => {
                setItems(res.data.meals || []); /*meals - that means data object variable -> This ensures the state is always an array, even if meals is null */
            })
            .catch((error) => console.log(error)); 
    }, []);

    return (
        <div style={styles.container}>

            {items.map(({ strMeal, strMealThumb, idMeal }) => (
                
                <section key={idMeal} style={styles.card}>
                    <img src={strMealThumb} alt={strMeal} style={styles.image} />

                    <section style={styles.content}>
                        <p style={styles.title}>title : {strMeal}</p>
                        <p style={styles.id}>ID: {idMeal}</p>
                    </section>

                </section>
            ))}
        </div>
    );
};

export default Meals;
