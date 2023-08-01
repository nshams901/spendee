import React from 'react'
import SearchField from '../components/SearchField'

const Topbar = () => {
    return (
        <div className='flex gap-20 py-10 border-b border-blue-200'>
            <header className='text-[#FED7FD] font-serif'>SPENDEE</header>
            <ul className='flex gap-6 text-white'>
                <li>Dashboard</li>
            </ul>
        </div>
    )
}

export default Topbar