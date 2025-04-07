import React from 'react'
import { NavLink } from 'react-router-dom'

function Menu() {
    return (
        <div>
            <div className='flex flex-col items-center justify-center min-h-screen bg-slate-950 text-white'>
                <h1 className='text-3xl mb-8 font-bold'>Menu</h1>
                <div className='bg-slate-800 px-6 py-8 rounded shadow-md max-w-[550px] w-80 md:w-1/2 lg:w-1/3'>
                    <div className='flex flex-col items-center gap-4'>
                        <button className='w-full bg-slate-700 text-xl font-medium rounded py-2'><NavLink to={'/admin/posts'}>Gerenciar Noticias</NavLink></button>
                        <button className='w-full bg-slate-700 text-xl font-medium rounded py-2'><NavLink to={'/admin/leis'}>Gerenciar Leis</NavLink></button>
                        <button className='w-full bg-slate-700 text-xl font-medium rounded py-2'><NavLink to={'/'}>Voltar</NavLink></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Menu