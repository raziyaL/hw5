import React, { useState } from 'react';

function Input() {
    const [name, setName] = useState('');
    const [names, setNames] = useState([]);
    const [editIndex, setEditIndex] = useState(null);


    const addOrEditName = () => {
        if (editIndex !== null) {

            const updatedNames = [...names];
            updatedNames[editIndex] = name;
            setNames(updatedNames);
            setEditIndex(null);
        } else {
            if (name !== '') {
                setNames([...names, name]);
            }
        }
        setName('');
    };

    const startEdit = (index) => {
        setEditIndex(index);
        setName(names[index]);
    };


    return (
        <div>
            <h1>name list</h1>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="enter your name"
            />
            <button onClick={addOrEditName} disabled={!name}>
                {editIndex !== null ? 'save' : 'add'}
            </button>
            {names.length === 0 ? (
                <p>list empty</p>
            ) : (
                <ul>
                    {names.map((item, index) => (
                        <li key={index}>
                            {editIndex === index ? (
                                <div>
                                    <input
                                        disabled={editIndex !== null}
                                        type="text"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </div>
                            ) : (
                                <div>
                                    {item}
                                    <button onClick={() => startEdit(index)}>edit text</button>
                                </div>
                            )}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default Input;