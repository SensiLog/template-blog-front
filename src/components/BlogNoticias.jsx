import React from 'react'
import PostBlogHome from './PostBlog'

function BlogNoticias() {

    const data = [
        {
            urlImage: 'https://wallpapers.com/images/featured/imagens-muito-legais-40it5k0y58kfe71d.jpg',
            title: 'Lorem ipsum dolor sit amet consectetur.',
            date: '12/12/2021',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni fugit explicabo voluptate nesciunt dolorem, voluptatibus eveniet quod quaerat harum necessitatibus voluptatum fuga atque, suscipit asperiores ipsam, eligendi aspernatur quos? Perferendis obcaecati incidunt voluptatibus voluptas dignissimos laboriosam, debitis quaerat in ad iste optio, eum repellat. Iure nobis provident sit eius iusto.'
        },
        {
            urlImage: 'https://www.mercadoeeventos.com.br/wp-content/uploads/2022/10/Embratur-Brasil-ultrapassa-marca-de-1-milhao-de-turistas-estrangeiros-recebidos-pela-primeira-vez-desde-2020.png',
            title: 'Lorem ipsum dolor sit amet consectetur.',
            date: '12/09/2021',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni fugit explicabo voluptate nesciunt dolorem, voluptatibus eveniet quod quaerat harum necessitatibus voluptatum fuga atque, suscipit asperiores ipsam, eligendi aspernatur quos? Perferendis obcaecati incidunt voluptatibus voluptas dignissimos laboriosam, debitis quaerat in ad iste optio, eum repellat. Iure nobis provident sit eius iusto.'
        },
        {
            urlImage: 'https://ichef.bbci.co.uk/ace/ws/640/cpsprodpb/6192/live/61bb3530-f641-11ee-91c5-c92e09ae6ba7.jpg.webp',
            title: 'Lorem ipsum dolor sit amet consectetur.',
            date: '12/12/2024',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni fugit explicabo voluptate nesciunt dolorem, voluptatibus eveniet quod quaerat harum necessitatibus voluptatum fuga atque, suscipit asperiores ipsam, eligendi aspernatur quos? Perferendis obcaecati incidunt voluptatibus voluptas dignissimos laboriosam, debitis quaerat in ad iste optio, eum repellat. Iure nobis provident sit eius iusto.'
        }
    ]

    return (
        <div className='bg-slate-100 flex flex-col items-center px-5 py-10'>
            <div className='flex flex-col items-start w-full 2xl:w-[1500px] lg:px-32 md:px-12'>
                {data == undefined ? <p>Carregando...</p> : data.map((item, index) => (
                    <PostBlogHome key={index} urlImage={item.urlImage} title={item.title} date={item.date} desc={item.desc} />
                ))}
            </div>
        </div>
    )
}

export default BlogNoticias