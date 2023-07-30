"use client"
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from './userSlice'
import createUser from '@/libs/createUser';

export default function User() {
    const { user } = useSelector(selectUser);
    console.log('users', user);

    const [input, setInput] = useState({
        name: "",
        email: "",
        gender: ""
    });

    const handleInput = (e) => {
        setInput((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    const handleSubmitForm = async (e) => {
        e.preventDefault();
        const data = await createUser(input);
        console.log('data', data);
    }

  return (
    <div >
        <form onSubmit={handleSubmitForm}>
            <input type="text" name="name" onChange={handleInput} />
            <input type="text" name="email" onChange={handleInput} />
            <input type="text" name="gender" onChange={handleInput} />
            <button type='submit'>Save</button>
        </form>
    </div>
  )
}
