import React from 'react'

function PostBlog(props) {
  return (
    <div className='w-full bg-white p-5 my-5 rounded shadow-xl flex-col md:flex-row md:flex items-start'>
      <div className='lg:w-1/3 md:w-2/4 w-full h-60 p-4'>
        <img
          className="w-full h-full object-cover"
          src={props.urlImage}
          alt="img-noticia"
        />
      </div>
      <div className='p-4 h-full lg:w-2/3 md:w-2/4 space-y-3'>
        <h2 className='md:text-2xl text-xl font-bold text-slate-900'>{props.title}</h2>
        <p className='text-xs md:text-sm text-slate-500'>{props.date}</p>
        <p className='text-slate-700 truncate-custom text-sm md:text-base'>{props.desc}</p>
      </div>
    </div>
  )
}

export default PostBlog