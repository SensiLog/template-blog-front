import { useState } from 'react'
import Header from '../components/Header'
import Lei from '../components/Lei'

function LeisSancionadas() {
  const [counter, setCounter] = useState(13)

  return (
    <div>
      <Header />
      <div className='bg-slate-800 h-[20vh] md:h-[30vh] flex items-center justify-center'>
        <h1 className='font-bold text-3xl md:text-5xl text-white'>{counter} LEIS SANCIONADAS</h1>
      </div>
      <div className='flex justify-center items-center w-screen md:p-12 bg-slate-100'>
        <Lei />
      </div>
    </div>
  )
}

export default LeisSancionadas