import React from 'react'

function CardNoticia(props) {
    return (
        <div onClick={props.function} className='bg-slate-800 px-6 py-8 rounded shadow-md max-w-[350px] cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out'>
            <div className='w-[300px] h-[200px] rounded overflow-hidden mb-4'>
                <img className='w-full h-full object-cover' src={props.urlImage} alt="img-noticia" />
            </div>
            <div className='flex flex-col items-start'>
                <h1 className='font-semibold text-lg lg:text-xl truncate-custom'>{props.title}</h1>
                <p className='text-xs md:text-sm text-slate-500'>{props.date}</p>
                <p className='text-sm md:text-base truncate'>{props.desc}</p>
            </div>
        </div>
    )
}

export default CardNoticia