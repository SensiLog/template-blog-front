import React from 'react'

function CardLeis(props) {
  return (
    <div onClick={props.function} className='bg-slate-800 px-6 py-8 rounded shadow-md w-[300px] cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out'>
      <h1 className='font-semibold text-lg lg:text-xl truncate w-full mb-2.5'>Lei {props.numeroLei}</h1>
      <div className='flex flex-col items-start gap-1'>
        <p className='text-sm md:text-base truncate w-full'>{props.ementa}</p>
        <p className='text-xs md:text-sm text-slate-500 truncate w-full'>{props.conteudoLei}</p>
        <p className='text-xs md:text-sm text-slate-300 truncate w-full'>{props.statusLei}</p>
      </div>
    </div>
  )
}

export default CardLeis