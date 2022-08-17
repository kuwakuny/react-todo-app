import React from 'react'

export default function Form({ value, setValue, handleSubmit }) {
    console.log('Form rendered')
    const handleChange = (e) => {
        setValue(e.target.value)
    }

    return (
        <form onSubmit={handleSubmit} className="flex pt-2">
            <input
                type="text"
                name="value"
                className="w-full px-3 py-2 mr-4 text-gray-500 border rounded shadow focus:outline-none focus:border-sky-500"
                placeholder="write to do"
                value={value}
                onChange={handleChange}
            />
            <button
                className="p-2 text-blue-400 border-2 border-blue-400 rounded hover:text-white hover:bg-blue-300"
                type="submit"
            >enter</button>
        </form>
    )
}
