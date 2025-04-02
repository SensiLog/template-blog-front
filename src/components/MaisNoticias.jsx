import React from 'react'

function MaisNoticias(props) {
    return (
        <div className='mt-6'>
            <h1>{props.titulo}</h1>
            <div className='flex flex-row justify-between'>
                <div className='w-[100px] h-[100px] flex-shrink-0 mr-4'>
                    <img
                        className="w-full h-full object-cover"
                        src={props.urlImage}
                        alt="img-noticia"
                    />
                </div>
                <p className='truncate-custom text-slate-600 text-sm'>{props.desc}</p>
            </div>
        </div>
    )
}

export default MaisNoticias