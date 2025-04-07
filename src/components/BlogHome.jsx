import PostBlog from './PostBlog'
import instance from '../hooks/instance.js'
import { NavLink } from 'react-router-dom'
import { formatDate } from '../hooks/utils.js'
import { useEffect, useState } from 'react'

function BlogHome() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null);

  const getData = async () => {
    try {
      const response = await instance.get('/posts/user/a1d4072d-8237-463a-a0be-d5598342f87c')
      setData(response.data.posts)
      console.log(response.data.posts)
      setLoading(false)
    } catch (error) {
      console.error(error);
      setError('Erro ao carregar os dados. Tente novamente mais tarde.');
      setLoading(false);
    }
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div className='bg-slate-100 flex flex-col items-center px-5 py-10'>
      <div className='flex flex-col items-start w-full 2xl:w-[1500px] lg:px-32 md:px-12'>
        <h1 className='md:text-4xl text-2xl italic font-bold text-slate-900'>NOTÍCIAS</h1>
        {loading && <p className="text-center w-full">Carregando...</p>}
        {error && <p className="text-center w-full text-red-500">{error}</p>}
        {!loading && !error && data.map((item, index) => (
          <PostBlog key={index} id={item.id} urlImage={item.imgUrl} title={item.title} date={formatDate(item.date)} desc={item.content} />
        ))}
      </div>
      <NavLink to='/noticias'>
        <button className='bg-slate-900 text-white font-semibold md:text-lg px-4 py-2 rounded cursor-pointer transition-colors hover:bg-slate-500'>VER MAIS</button>
      </NavLink>
    </div>
  )
}

export default BlogHome