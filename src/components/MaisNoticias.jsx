import React from 'react'
import { NavLink } from 'react-router-dom'

function MaisNoticias(props) {
    return (
        <NavLink to={`/noticia/${props.id}`} className='w-full'>
            <div className='mt-6'>
                <h1>{props.titulo}</h1>
                <div className='flex flex-row justify-between gap-4'>
                    <div className='w-[100px] h-[100px] flex-shrink-0'>
                        <img
                            className="w-full h-full object-cover"
                            src={props.urlImage}
                            alt="img-noticia"
                        />
                    </div>
                    <p className='truncate-custom text-slate-600 text-sm'>{props.desc}</p>
                </div>
            </div>
        </NavLink>
    )
}

export default MaisNoticias