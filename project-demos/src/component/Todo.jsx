import React, { useState } from 'react';

const Todo = () => {
    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState(""); 

    const handleSubmit = () => {
        if (!input.trim()) return;  /* if check empty input */
        setTodos((todos) => [
            ...todos, /* concot prev todo */
            {
                text: input,
                id: Math.floor(Math.random() * 10000),
            },
        ]);
        setInput('');
    };

    const removeTodo = (id) => 
        setTodos((todos) => todos.filter((t) => t.id !== id));

    return (
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
            <input 
                placeholder="New todo" 
                type="text" 
                value={input} 
                onChange={(e) => setInput(e.target.value)} 
                style={{ padding: '8px', borderRadius: '5px', border: '1px solid #ccc', marginRight: '10px' }} 
            />
            <button 
                onClick={handleSubmit} 
                style={{ padding: '8px 12px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
            >
                Add
            </button>

            <ul className="todos-List" style={{ listStyleType: 'none', padding: 0, marginTop: '10px' }}>
                {todos.map(({ text, id }) => (
                    <li 
                        className="todo" 
                        key={id} 
                        style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#f9f9f9', padding: '8px', borderRadius: '5px', margin: '5px 0', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)' }}
                    >
                        <span>{text}</span>
                        <button 
                            className="close" 
                            onClick={() => removeTodo(id)} 
                            style={{ background: '#ff4d4d', color: 'white', padding: '5px 10px', borderRadius: '5px', cursor: 'pointer', border: 'none' }}
                        >
                            X
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Todo;
