import React from 'react'

function CardLeis(props) {
  return (
    <div onClick={props.function} className='bg-slate-800 px-6 py-8 rounded shadow-md max-w-[350px] cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out'>
      <h1>Lei {props.numeroLei}</h1>
      <p className='text-sm md:text-base truncate'>{props.ementa}</p>
      <p className='text-xs md:text-sm text-slate-500'>{props.conteudoLei}</p>
      <p className='text-xs md:text-sm text-slate-500'>{props.statusLei}</p>
    </div>
  )
}

export default CardLeis