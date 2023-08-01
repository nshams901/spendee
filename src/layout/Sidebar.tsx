import React, { useState } from 'react'
type StateType = {
    [key: string]: any,
    userMenu: boolean,
}
const Sidebar = () => {
    const [state, setState] = useState<StateType>({ userMenu: false });

    const { userMenu } = state

    const handleUserMenu = () => {
        setState({ ...state, userMenu: !userMenu })
    }
    return (
        <div className="flex h-full rounded-md w-[250px] flex-col bg-slate-900 text-white ">
            <div className='py-5 text-center border-b text-green-500 border-slate-800 font-serif'>STOXXY</div>
            <ul className="flex w-full flex-col gap-3 px-3 mt-5">
                <li className='py-1 px-3 rounded-md hover:bg-slate-500 cursor-pointer'>Dashboard</li>
                <li className='py-1 px-3 rounded-md hover:bg-slate-500 cursor-pointer'>Wallet</li>
            </ul>

            <div className="mt-auto border-t border-slate-800 px-2 py-2">
                <div className="flex items-center gap-2">
                    <div className="h-8 w-8 overflow-hidden rounded-full"><img className="rounded-full h-full w-full" src="https://picsum.photos/200" alt="" /></div>
                    <div>
                        <p className="text-sm text-white">Dadda Hicham</p>
                        <p className="text-xs text-slate-400">creator</p>
                    </div>
                    {userMenu &&
                        <button className="relative ml-auto flex h-6 w-6 items-center justify-center rounded-full hover:bg-slate-800">
                            <div x-transition className="absolute bottom-7 left-0 z-10 mt-2 w-48 rounded-lg  bg-slate-950 text-left text-sm shadow-lg">
                                <div className="p-1">
                                    <a href="#" className="flex w-full items-center rounded-md px-3 py-2 text-slate-300 hover:bg-slate-700 hover:text-slate-100"> Dashboard </a>
                                    <a href="#" className="flex w-full items-center rounded-md px-3 py-2 text-left text-sm text-slate-300 hover:bg-slate-700 hover:text-slate-100"> Settings </a>
                                    <a href="#" className="flex w-full items-center rounded-md px-3 py-2 text-left text-sm text-slate-300 hover:bg-slate-700 hover:text-slate-100"> Help </a>
                                    <a href="#" className="flex w-full items-center rounded-md px-3 py-2 text-slate-300 hover:bg-slate-700 hover:text-slate-100"> Log out </a>
                                </div>
                            </div>
                        </button>

                    }
                    <svg onClick={handleUserMenu} xmlns="http://www.w3.org/2000/svg" className="ml-auto cursor-pointer h-4 w-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" >
                        <circle cx="12" cy="12" r="1"></circle>
                        <circle cx="19" cy="12" r="1"></circle>
                        <circle cx="5" cy="12" r="1"></circle>
                    </svg>
                </div>
            </div>
        </div>
    )
}

export default Sidebar