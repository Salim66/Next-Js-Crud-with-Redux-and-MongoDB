"use client"
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { todoSelect } from './todoSlice'
import { createTodo, deleteTodo, fetchTodo } from './todoApi';

export default function todoPage() {
    const { todos } = useSelector(todoSelect);
    const dispatch = useDispatch();
    const [input, setInput] = useState({
        name: "",
        priority: ""
    });

    const handleInput = (e) => {
        setInput((prevState) => ({
            ...prevState,
            [e.target.name] : e.target.value
        }))
    }

    const handleSubmitForm = (e) => {
        e.preventDefault();
        dispatch(createTodo(input));
    }

    const handleDelete = (id) => {
        dispatch(deleteTodo(id));
    }

    useEffect(() => {
        dispatch(fetchTodo());
    }, [dispatch]);

    console.log('data', todos)
    
    return (
        <div>
            <form onSubmit={handleSubmitForm}>
                <input type="text" name='name' onChange={handleInput} />
                <input type="text" name='priority' onChange={handleInput} />
                <button type='submit'>Save</button>
            </form>
            <hr />
            <ul>
                {
                    todos?.map((data, index) => (
                        <li key={index}>
                            <p>{ data?.name } <button onClick={() => handleDelete(data._id)}>Delete</button></p>
                            <p>{ data?.priority }</p>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}
