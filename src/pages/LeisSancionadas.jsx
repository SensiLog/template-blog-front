import { useState, useEffect, use } from 'react'
import Header from '../components/Header'
import Lei from '../components/Lei'
import Footer from '../components/Footer'
import instance from '../hooks/instance.js'

function LeisSancionadas() {
  const [counter, setCounter] = useState(0)
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const getSancionadas = async () => {
    try {
      const response = await instance.get('/leis/a1d4072d-8237-463a-a0be-d5598342f87c/sancionadas')
      setData(response.data.leis)
      setCounter(response.data.leis.length)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    getSancionadas()
  }, [])

  return (
    <div className='flex items-center justify-center flex-col'>
      <Header />
      <div className='bg-slate-800 h-[20vh] md:h-[30vh] flex items-center justify-center'>
        <h1 className='font-bold text-3xl md:text-5xl text-white w-screen text-center'>{counter} LEIS SANCIONADAS</h1>
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

export default LeisSancionadas