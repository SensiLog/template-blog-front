import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

function Contato() {
    return (
        <div>
            <Header />
            <div className='bg-slate-800 h-[20vh] md:h-[30vh] flex items-center justify-center'>
                <h1 className='font-bold text-3xl md:text-5xl text-white'>CONTATO</h1>
            </div>
            <div className='flex justify-center items-center w-screen md:p-12 bg-slate-100'>
                <div className='flex flex-col items-center justify-center space-y-4 px-8 py-12 md:p-8 md:w-1/3'>
                    <h1 className='text-4xl md:text-6xl font-bold'>Fale comigo!</h1>
                    <p className='text-sm md:text-base text-center'>Você tem alguma reclamação, sugestão ou precisa de algum suporte? Entre em contato nas redes sociais!</p>
                    <div className='flex flex-col space-y-4 w-full mt-4 items-center'>
                        <a href='https://www.facebook.com' className='hover:bg-slate-700 w-full transition-colors bg-slate-800 text-white text-center rounded py-2' target='_blank' rel='noreferrer'>
                            <i class="fa-brands fa-facebook" /> Facebook
                        </a>
                        <a href='https://www.instagram.com' className='hover:bg-slate-700 w-full transition-colors bg-slate-800 text-white text-center rounded py-2' target='_blank' rel='noreferrer'>
                            <i class="fa-brands fa-instagram" /> Instagram
                        </a>
                        <a href='https://www.twitter.com' className='hover:bg-slate-700 w-full transition-colors bg-slate-800 text-white text-center rounded py-2' target='_blank' rel='noreferrer'>
                            <i class="fa-brands fa-x-twitter" /> Twitter
                        </a>
                        <a href='https://www.linkedin.com' className='hover:bg-slate-700 w-full transition-colors bg-slate-800 text-white text-center rounded py-2' target='_blank' rel='noreferrer'>
                            <i class="fa-brands fa-linkedin" /> LinkedIn
                        </a>
                    </div>
                </div>
            </div>
            <div></div>
            <Footer />
        </div>
    )
}

export default Contato