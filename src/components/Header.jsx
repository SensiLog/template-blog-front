import { useState } from 'react';
import { NavLink } from "react-router";

function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [showSubmenu, setShowSubmenu] = useState(false);

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
                    >MANDATO</NavLink>
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
                    <div
                        className='cursor-pointer hover:text-slate-300 transition-colors relative'
                        onMouseEnter={() => setShowSubmenu(true)}
                        onMouseLeave={() => setShowSubmenu(false)}
                    ><i class="fa-solid fa-chevron-down" /> MANDATO
                        <div
                            className={`absolute left-0 top-full bg-slate-700 w-40 mt-2 shadow-lg rounded z-10 overflow-hidden transition-all duration-500 ease-out ${showSubmenu ? 'opacity-100 max-h-40' : 'opacity-0 max-h-0'}`}
                        >
                            <ul className='flex flex-col p-2'>
                                <NavLink to='/lei/projetos' className="p-2 hover:bg-slate-800 transition-colors cursor-pointer">Projeto de Lei</NavLink>
                                <NavLink to='/lei/sancionadas' className="p-2 hover:bg-slate-800 transition-colors cursor-pointer">Lei Sancionada</NavLink>
                            </ul>
                        </div>
                    </div>
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