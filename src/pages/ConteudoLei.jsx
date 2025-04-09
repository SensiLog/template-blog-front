import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import instance from '../hooks/instance.js'
import Header from '../components/Header'
import Footer from '../components/Footer'
import DocLei from '../components/DocLei'
import { formatTextWithLineBreaks } from '../hooks/utils.js';

function ConteudoLei() {
    const { id } = useParams()
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    const getLei = async () => {
        try {
            const response = await instance.get(`leis/find/${id}`)
            setData(response.data)
            setLoading(false)
        } catch (error) {
            console.error(error)
            setError('Erro ao carregar os dados. Tente novamente mais tarde.')
            setLoading(false)
        }
    }

    useEffect(() => {
        if (id) {
            setLoading(true)
            getLei()
        }
    }, [id])

    return (
        <div>
            <Header />
            {loading ? (
                <p>Carregando...</p>
            ) : error ? (
                <p className='text-red-500'>{error}</p>
            ) : (
                <>
                    <div className='bg-slate-800 h-[20vh] md:h-[30vh] flex items-center justify-center'>
                        <h1 className='font-bold text-3xl md:text-5xl text-white'>LEI {data.numeroLei}</h1>
                    </div>
                    <div className='bg-slate-100 w-full flex flex-col justify-center items-center p-8 md:p-12 space-y-4'>
                        <h1 className='font-bold text-2xl md:text-3xl'>EMENTA:</h1>
                        <p className='2xl:w-[1500px] text-center'>{data.ementa}</p>
                        <DocLei
                            autor='Vereador Fulano de Tal'
                            conteudo={formatTextWithLineBreaks(data.conteudoLei)}
                        />
                    </div>
                </>
            )}
            <Footer />
        </div>
    )
}

export default ConteudoLei