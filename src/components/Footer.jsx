import React from 'react'
import { NavLink } from "react-router";

function Footer() {
    return (
        <footer className='bg-slate-900 text-white w-screen py-12 px-4 md:px-0 space-y-4 md:space-y-0'>
            <div className='md:flex-row justify-center md:justify-evenly md:items-start md:flex items-center w-full space-y-4 md:space-y-0'>
                <div className='md:w-1/5'>
                    <h1 className='md:text-4xl text-2xl font-semibold border-b-2 border-b-slate-500 mb-4'>Links</h1>
                    <ul className='md:text-sm text-xs space-y-1 cursor-pointer'>
                        <NavLink to='/'><li>Início</li></NavLink>
                        <NavLink to='/biografia'><li>Biografia</li></NavLink>
                        <NavLink to='/lei/sancionadas'><li>Leis sancionadas</li></NavLink>
                        <NavLink to='/lei/projetos'><li>Projetos de lei</li></NavLink>
                        <NavLink to='/noticias'><li>Notícias</li></NavLink>
                        <NavLink to='/contato'><li>Contato</li></NavLink>
                    </ul>
                </div>
                <div className='md:w-1/5'>
                    <h1 className='md:text-4xl text-2xl font-semibold border-b-2 border-b-slate-500 mb-4'>Contatos</h1>
                    <ul className='md:text-sm text-xs space-y-1'>
                        <li>Casa do Carai s/nº, Prédio: Loucura - Sala: 666 - Valentina, João Pessoa, PB</li>
                        <li>(21) 4002-8922</li>
                    </ul>
                </div>
                <div className='md:w-1/5'>
                    <h1 className='md:text-4xl text-2xl font-semibold border-b-2 border-b-slate-500 mb-4'>Redes</h1>
                    <div className='md:text-sm text-xs space-y-1 cursor-pointer flex flex-col'>
                        <a href='https://www.facebook.com' target='_blank' rel='noreferrer'>Facebook</a>
                        <a href='https://www.instagram.com' target='_blank' rel='noreferrer'>Instagram</a>
                        <a href='https://www.twitter.com' target='_blank' rel='noreferrer'>Twitter</a>
                        <a href='https://www.linkedin.com' target='_blank' rel='noreferrer'>LinkedIn</a>
                    </div>
                </div>
            </div>
            <div className='pt-4 md:m-4'>
                <p className='text-xs text-center'>© 2025 Sensilog Tecnologia. Todos os direitos reservados.</p>
            </div>
        </footer>
    )
}

export default Footer