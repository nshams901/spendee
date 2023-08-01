import React from 'react'

const SearchField = () => {
    return (
        <div className='flex my-4 mx-4 '>
            <label htmlFor="search" className='text-slate-900 rounded-md flex bg-slate-100 ml-auto py-1 '>
                <input placeholder='Search...' type='text' id='search' className='rounded-md pl-3 outline-none' />
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mx-2 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
            </label>
        </div>
    )
}

export default SearchField