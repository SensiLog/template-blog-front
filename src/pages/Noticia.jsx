import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import MaisNoticias from '../components/MaisNoticias'

function Noticia() {
  const data = [
    {
      id: 1,
      urlImage: 'https://wallpapers.com/images/featured/imagens-muito-legais-40it5k0y58kfe71d.jpg',
      title: 'Lorem ipsum dolor sit amet consectetur.',
      date: '12/12/2021',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni fugit explicabo voluptate nesciunt dolorem, voluptatibus eveniet quod quaerat harum necessitatibus voluptatum fuga atque, suscipit asperiores ipsam, eligendi aspernatur quos? Perferendis obcaecati incidunt voluptatibus voluptas dignissimos laboriosam, debitis quaerat in ad iste optio, eum repellat. Iure nobis provident sit eius iusto.'
    },
    {
      id: 2,
      urlImage: 'https://www.mercadoeeventos.com.br/wp-content/uploads/2022/10/Embratur-Brasil-ultrapassa-marca-de-1-milhao-de-turistas-estrangeiros-recebidos-pela-primeira-vez-desde-2020.png',
      title: 'Lorem ipsum dolor sit amet consectetur.',
      date: '12/09/2021',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni fugit explicabo voluptate nesciunt dolorem, voluptatibus eveniet quod quaerat harum necessitatibus voluptatum fuga atque, suscipit asperiores ipsam, eligendi aspernatur quos? Perferendis obcaecati incidunt voluptatibus voluptas dignissimos laboriosam, debitis quaerat in ad iste optio, eum repellat. Iure nobis provident sit eius iusto.'
    },
    {
      id: 3,
      urlImage: 'https://ichef.bbci.co.uk/ace/ws/640/cpsprodpb/6192/live/61bb3530-f641-11ee-91c5-c92e09ae6ba7.jpg.webp',
      title: 'Lorem ipsum dolor sit amet consectetur.',
      date: '12/12/2024',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni fugit explicabo voluptate nesciunt dolorem, voluptatibus eveniet quod quaerat harum necessitatibus voluptatum fuga atque, suscipit asperiores ipsam, eligendi aspernatur quos? Perferendis obcaecati incidunt voluptatibus voluptas dignissimos laboriosam, debitis quaerat in ad iste optio, eum repellat. Iure nobis provident sit eius iusto.'
    }
  ]

  const noticia = {
    id: 1,
    title: 'Vizinha Faladeira é reconhecida como Patrimônio Cultural Imaterial, Social e Turístico da Cidade do Rio de Janeiro',
    date: '12/12/2021',
    desc: `
      É com grande orgulho que a Associação Recreativa Escola de Samba Vizinha Faladeira (ARES) foi oficialmente reconhecida pela Câmara Municipal do Rio de Janeiro como Patrimônio Cultural Imaterial, Social e Turístico da cidade. A aprovação da Lei 8837/25 representa não apenas o merecido reconhecimento da história e relevância dessa instituição, mas também a valorização de sua contribuição essencial para a cultura carioca e brasileira.

      Fundada em 1932 por David da Silva Neves, a Vizinha Faladeira é muito mais do que uma escola de samba. Ela carrega um legado histórico, cultural e social que atravessa gerações, especialmente no bairro de Santo Cristo, na zona portuária do Rio de Janeiro.

      A Vizinha Faladeira é uma das mais antigas escolas de samba do Brasil e, ao longo de sua trajetória, se tornou pioneira em diversas inovações que hoje fazem parte do carnaval carioca.

      O fato de ter interrompido suas atividades por 50 anos e, posteriormente, ter se reinventado, demonstra sua incrível resiliência. A Vizinha Faladeira também se destacou por seus enredos inovadores, especialmente aqueles inspirados em contos infantis, que têm o poder de educar, encantar e preservar valores culturais. Com seis títulos conquistados, incluindo sua ascensão nas divisões de Acesso, a escola reafirma sua importância não só no cenário carnavalesco, mas também como um instrumento de promoção de nossa identidade cultural.

      Essa é uma vitória para todos nós, cariocas e amantes do samba, e um reconhecimento justo para uma das mais importantes instituições culturais do Rio de Janeiro. Que a Vizinha Faladeira continue a brilhar como um símbolo da nossa história e de nossa paixão pela cultura popular.
    `,
    urlImage: 'https://marcioribeiro.rio/wp-content/uploads/2025/03/WhatsApp-Image-2022-11-03-at-10.47.06-1.jpeg'
  }

  const textoFormatado = noticia.desc.replace(/\n/g, '<br />')

  return (
    <div className='w-full flex flex-col items-center justify-start bg-slate-100'>
      <Header />
      <div className='p-8 lg:my-8 flex-col md:flex-row md:justify-around md:flex items-start space-y-8'>
        <div className='xl:w-2/3 lg:w-2/4 md:w-2/4 w-full max-w-[1000px] space-y-3'>
          <h1 className='font-semibold text-2xl lg:text-3xl'>{noticia.title}</h1>
          <p className='text-xs md:text-sm text-slate-500'>{noticia.date}</p>
          <div className='w-full'>
            <img
              className="w-full h-full object-cover"
              src={noticia.urlImage}
              alt="img-noticia"
            />
          </div>
          <span className='text-sm md:text-base' dangerouslySetInnerHTML={{ __html: textoFormatado }} />
        </div>
        <div className='lg:w-[350px] md:w-[250px]'>
          <h1 className='font-semibold text-2xl lg:text-3xl md:text-center'>Últimas notícias</h1>
          {data == undefined ? <p>Carregando...</p> : data.map((item, index) => (
            <MaisNoticias key={index} urlImage={item.urlImage} title={item.title} date={item.date} desc={item.desc} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Noticia