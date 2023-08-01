import React from 'react'

const Layout = ({ children } : { children : React.ReactNode}) => {
    return (
        <div className=' bg-[#25272c]'>
            <div className='h-screen p-3'>
                <div className='h-full px-10 max-w-[1280px] rounded-3xl mx-auto bg-gradient-to- bg-[#4062ff]'>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Layout