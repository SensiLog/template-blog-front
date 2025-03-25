import { useState } from 'react';
import { NavLink } from "react-router";

function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="bg-slate-900 p-5 flex justify-between lg:justify-evenly md:justify-around items-center w-full">
            <h1 className="text-white text-2xl md:text-4xl font-bold">VEREADOR</h1>
            <div className="lg:hidden">
                <button onClick={() => setIsOpen(!isOpen)} className="text-white text-3xl">☰</button>
            </div>

            {/* mobile */}
            <div className={`bg-slate-900 shadow-slate-900 h-full fixed top-0 right-0 w-2/4 p-6 z-50 lg:hidden transition-transform duration-300 ${isOpen ? 'translate-x-0 shadow-2xl' : 'translate-x-full'}`}>
                <button onClick={() => setIsOpen(false)} className="text-white text-3xl absolute top-4 right-4">✖</button>
                <ul className="flex flex-col gap-4 text-white mt-10">
                    <NavLink
                        to='/'
                        className='cursor-pointer hover:text-slate-300 transition-colors'
                    >INÍCIO</NavLink>
                    <NavLink
                        to='/biografia'
                        className='cursor-pointer hover:text-slate-300 transition-colors'
                    >BIOGRAFIA</NavLink>
                    <NavLink
                        to='/leis'
                        className='cursor-pointer hover:text-slate-300 transition-colors'
                    >PROJETOS</NavLink>
                    <NavLink
                        to='/noticias'
                        className='cursor-pointer hover:text-slate-300 transition-colors'
                    >NOTÍCIAS</NavLink>
                    <NavLink
                        to='/contato'
                        className='cursor-pointer hover:text-slate-300 transition-colors'
                    >CONTATO</NavLink>
                </ul>
            </div>

            {/* desktop */}
            <nav className="hidden lg:flex lg:gap-6 text-white">
                <ul className="flex gap-6">
                    <NavLink
                        to='/'
                        className='cursor-pointer hover:text-slate-300 transition-colors'
                    >INÍCIO</NavLink>
                    <NavLink
                        to='/biografia'
                        className='cursor-pointer hover:text-slate-300 transition-colors'
                    >BIOGRAFIA</NavLink>
                    <NavLink
                        to='/leis'
                        className='cursor-pointer hover:text-slate-300 transition-colors'
                    >PROJETOS</NavLink>
                    <NavLink
                        to='/noticias'
                        className='cursor-pointer hover:text-slate-300 transition-colors'
                    >NOTÍCIAS</NavLink>
                    <NavLink
                        to='/contato'
                        className='cursor-pointer hover:text-slate-300 transition-colors'
                    >CONTATO</NavLink>
                </ul>
            </nav>
        </div>
    );
}

export default Header