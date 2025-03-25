import React from 'react'
import Header from '../components/Header'
import BlogNoticias from '../components/BlogNoticias'
import Footer from '../components/Footer'

function Blog() {
  return (
    <div>
      <Header />
      <div className='bg-slate-800 h-[20vh] md:h-[30vh] flex items-center justify-center'>
        <h1 className='font-bold text-3xl md:text-5xl text-white'>NOTÍCIAS</h1>
      </div>
      <BlogNoticias />
      <Footer />
    </div>
  )
}

export default Blog