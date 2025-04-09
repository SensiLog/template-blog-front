import React from 'react'
import { useState, useEffect } from 'react'
import instance from '../hooks/instance.js'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Lei from '../components/Lei'

function ProjetosDeLei() {
  const [data, setData] = useState([])

  const getProjetos = async () => {
    try {
      const response = await instance.get('/leis/a1d4072d-8237-463a-a0be-d5598342f87c/projeto')
      setData(response.data.leis)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    getProjetos()
  }, [])

  return (
    <div className='flex items-center justify-center flex-col'>
      <Header />
      <div className='bg-slate-800 h-[20vh] md:h-[30vh] flex items-center justify-center'>
        <h1 className='font-bold text-3xl md:text-5xl text-white w-screen text-center'>PROJETOS DE LEI</h1>
      </div>
      <div className='flex flex-col justify-center items-center w-screen p-8 md:p-12 bg-slate-100'>
        <div className='w-full 2xl:w-[1500px] lg:px-32 md:px-12'>
          {data.map((item) => {
            return (
              <Lei
                id={item.id}
                lei={item.numeroLei}
                ementa={item.ementa}
              />
            )
          }
          )}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default ProjetosDeLei