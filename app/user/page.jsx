"use client"
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectUser } from './userSlice'
import createUser from '@/libs/createUser';
import { createUserApi, fetchUsers } from './userApi';
import getAllUser from '@/libs/getAllUser';

export default function User() {
    const { users } = useSelector(selectUser);
    const dispatch = useDispatch();

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
        dispatch(createUserApi(input));
    }

    useEffect(() => {
        dispatch(fetchUsers);
    }, [dispatch]);

    console.log('users', users)

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
