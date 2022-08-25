import React, { useState } from 'react';
import { Input } from '@chakra-ui/react'
const ToDoForm = ({ addTask }) => {

    const [ userInput, setUserInput ] = useState('');

    const handleChange = (e) => {
        setUserInput(e.currentTarget.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addTask(userInput);
        setUserInput("");
    }
    return (
        <form onSubmit={handleSubmit}>
            <label>Add your College</label>
            <Input value={userInput} type="text" onChange={handleChange} placeholder='large size' size='lg' width='auto' />
            <label>Add your Description</label>
            <Input value={userInput} type="text" onChange={handleChange} placeholder='large size' size='lg' width='auto' />
            <button>Submit</button>
        </form>
    );
};

export default ToDoForm;