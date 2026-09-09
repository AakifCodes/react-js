import React, { useState, useEffect, useRef } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo, updateTodo } from '../features/todo/todoSlice' 

function AddTodo({ editTodo, setEditTodo }) {
    const [input, setInput] = useState('')
    const dispatch = useDispatch()
    const inputRef = useRef(null)

    // Jab edit button click ho toh input fill aur focus ho jaaye
    useEffect(() => {
        if (editTodo) {
            setInput(editTodo.text)
            inputRef.current?.focus()
        }
    }, [editTodo])

    const submitHandler = (e) => {
        e.preventDefault()
        if (!input.trim()) return

        if (editTodo) {
            dispatch(updateTodo({ id: editTodo.id, text: input }))
            setEditTodo(null) 
        } else {
            dispatch(addTodo(input))
        }
        setInput('')
    }

    return (
        <form onSubmit={submitHandler} className="space-x-3 mt-12">
            <input
                ref={inputRef}
                type="text"
                className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                placeholder="Enter a Todo..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button
                type="submit"
                className={`text-white border-0 py-2 px-6 focus:outline-none rounded text-lg ${
                    editTodo ? 'bg-green-600 hover:bg-green-700' : 'bg-indigo-500 hover:bg-indigo-600'
                }`}
            >
                {editTodo ? 'Update Todo' : 'Add Todo'}
            </button>
        </form>
    )
}

export default AddTodo;