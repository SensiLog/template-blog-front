import React, { useEffect, useState } from 'react'
import PostBlog from './PostBlog'
import instance from '../hooks/instance.js'
import { formatDate } from '../hooks/utils.js'

function BlogNoticias() {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null);

    const getData = async () => {
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

    useEffect(() => {
        getData()
    }, [])

    return (
        <div className='bg-slate-100 flex flex-col items-center px-5 py-10'>
            <div className='flex flex-col items-start w-full 2xl:w-[1500px] lg:px-32 md:px-12'>
                {loading && <p className="text-center w-full">Carregando...</p>}
                {error && <p className="text-center w-full text-red-500">{error}</p>}
                {!loading && !error && data.map((item, index) => (
                    <PostBlog key={index} id={item.id} urlImage={item.imgUrl} title={item.title} date={formatDate(item.date)} desc={item.content} />
                ))}
            </div>
        </div>
    )
}

export default BlogNoticias