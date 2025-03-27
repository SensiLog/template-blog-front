import React from 'react'
import { Link } from 'react-router-dom'

function Lei(props) {
    return (
        <div className='w-full bg-white p-4 lg:p-8 mt-5 mb-8 rounded shadow-xl space-y-8'>
            <div className='space-y-2'>
                <h1 className='font-bold text-3xl lg:text-4xl'>{props.lei}</h1>
                <p className='text-sm md:text-base'>{props.ementa}</p>
            </div>
            <Link to={`/lei/${props.id}`}>
                <button className='bg-slate-900 text-white font-bold md:text-lg px-4 py-2 rounded cursor-pointer transition-colors hover:bg-slate-500'>VER MAIS</button>
            </Link>
        </div>
    )
}

export default Lei