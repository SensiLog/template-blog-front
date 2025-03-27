import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Lei from '../components/Lei'

function ProjetosDeLei() {
  const data = [
    {
      id: 4,
      lei: 'Lei 4',
      ementa: 'Ementa da Lei 4',
      conteudo: 'Conteúdo da Lei 4',
      status: 'projeto'
    },
    {
      id: 5,
      lei: 'Lei 5',
      ementa: 'Ementa da Lei 5',
      conteudo: 'Conteúdo da Lei 5',
      status: 'projeto'
    },
    {
      id: 6,
      lei: 'Lei 6',
      ementa: 'Ementa da Lei 6',
      conteudo: 'Conteúdo da Lei 6',
      status: 'projeto'
    }
  ]

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
                lei={item.lei}
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