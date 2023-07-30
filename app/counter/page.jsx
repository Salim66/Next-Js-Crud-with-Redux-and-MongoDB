"use client"
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, selectCount } from './counterSlice'

export default function counterPage() {
    const dispatch = useDispatch();
    const { count } = useSelector(selectCount)
  return (
    <div>
          <h1>{ count }</h1>
        <hr />
          <button onClick={() => dispatch(decrement())}>-</button>
          <button onClick={() => dispatch(increment())}>+</button>
    </div>
  )
}
