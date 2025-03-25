import React from 'react'
import Header from '../components/Header'
import BioHome from '../components/BioHome'
import BlogHome from '../components/BlogHome'
import Footer from '../components/Footer'

function Home() {
    return (
        <div>
            <Header />
            <div className='flex justify-center items-center h-[55vh] bg-slate-200'>
                <span>box</span>
            </div>
            <BioHome />
            <BlogHome />
            <Footer />
        </div>
    )
}

export default Home