import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import MaisNoticias from '../components/MaisNoticias'
import instance from '../hooks/instance.js'
import { formatTextWithLineBreaks, formatDate } from '../hooks/utils.js'

function Noticia() {
  const { id } = useParams()
  const [data, setData] = useState([]);
  const [noticia, setNoticia] = useState(null);
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null);

  const getNoticias = async () => {
    try {
      const response = await instance.get('/posts/user/b02ddfb9-25d7-4104-8d3e-b5fff308c6c4')
      setData(response.data.posts)
      setLoading(false)
    } catch (error) {
      console.error(error);
      setError('Erro ao carregar os dados. Tente novamente mais tarde.');
      setLoading(false);
    }
  }

  const getPost = async () => {
    try {
      const response = await instance.get(`posts/find/${id}`);
      setNoticia(response.data.post);
    } catch (error) {
      console.error(error);
      setError('Erro ao carregar a notícia. Tente novamente mais tarde.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (id) {
      setLoading(true);
      getPost();
      getNoticias();
    }
  }, [id]);

  return (
    <div className='w-full flex flex-col items-center justify-start bg-slate-100'>
      <Header />
      <div className='p-8 lg:my-8 flex-col md:flex-row md:justify-around md:flex items-start space-y-8'>
        <div className='xl:w-2/4 lg:w-2/4 md:w-2/4 w-full max-w-[1000px] space-y-3'>
          {loading ? (
            <p>Carregando...</p>
          ) : error ? (
            <p className='text-red-500'>{error}</p>
          ) : noticia ? (
            <>
              <h1 className='font-semibold text-2xl lg:text-3xl'>{noticia.title}</h1>
              <p className='text-xs md:text-sm text-slate-500'>{formatDate(noticia.date)}</p>
              <div className='w-full'>
                <img
                  className="w-full h-full object-cover"
                  src={noticia.imgUrl}
                  alt="img-noticia"
                />
              </div>
              <span
                className='text-sm md:text-base'
                dangerouslySetInnerHTML={{ __html: formatTextWithLineBreaks(noticia.content) }}
              />
            </>
          ) : (
            <p>Notícia não encontrada.</p>
          )}
        </div>
        <div className='lg:w-[350px] md:w-[250px]'>
          <h1 className='font-semibold text-2xl lg:text-3xl md:text-center'>Últimas notícias</h1>
          {loading ? (
            <p>Carregando...</p>
          ) : error ? (
            <p className='text-red-500'>{error}</p>
          ) : data ? data.map((item, index) => (
            <MaisNoticias key={index} id={item.id} urlImage={item.imgUrl} title={item.title} desc={item.content} />
          )) : (
            <p>Notícia não encontrada.</p>
          )}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Noticia