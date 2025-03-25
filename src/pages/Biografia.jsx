import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

function Biografia() {
    return (
        <div>
            <Header />
            <div className='bg-slate-800 h-[20vh] md:h-[30vh] flex items-center justify-center'>
                <h1 className='font-bold text-3xl md:text-5xl text-white'>BIOGRAFIA</h1>
            </div>
            <section className='bg-slate-100 p-5 text-sm md:text-base flex items-center flex-col space-y-6 md:px-32 md:py-10'>
                <p className='2xl:w-[1200px]'>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias laudantium adipisci ut explicabo quis est odio veritatis consequatur voluptas doloribus nemo amet nisi, optio, eveniet sequi assumenda? Expedita consequatur, atque quaerat eligendi qui nam praesentium animi doloremque molestiae ab odit? Earum reprehenderit iste nemo, nostrum animi velit similique aut illo, tenetur labore sint placeat molestias, blanditiis quaerat amet praesentium nihil. Placeat harum soluta quam labore vero aliquam, corporis porro, voluptas omnis quibusdam repellendus ex sapiente ratione minus excepturi expedita architecto quas debitis adipisci doloremque. Ad, neque at commodi ipsa id tempora ducimus officia, fugiat, laboriosam eaque magnam? Sed, enim pariatur.
                </p>
                <p className='2xl:w-[1200px]'>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis, fugit quidem. Reiciendis autem, enim iure sint ullam dolore assumenda impedit cumque iste quo nisi vitae, ea possimus ad qui ipsum. Temporibus sapiente, illo voluptatum optio tenetur obcaecati fugit iste laboriosam. Esse eveniet aut sit exercitationem voluptates cum accusantium obcaecati qui veritatis, excepturi pariatur dolor suscipit ad quia eligendi molestias, officia ipsam. Molestiae pariatur voluptate, unde numquam officiis quisquam architecto consequuntur voluptates ullam eaque voluptatibus praesentium tempora. Fugiat culpa mollitia delectus.
                </p>
            </section>
            <section className='bg-slate-200 p-5 text-sm md:text-base flex flex-col items-center space-y-6 md:px-32 md:py-10'>
                <div className='2xl:w-[1200px] flex flex-col lg:flex-row md:justify-evenly items-center space-y-6'>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum consequatur id libero tenetur aliquam, veniam culpa possimus itaque sapiente amet ad ab sint modi facilis voluptas. Nostrum, fuga consectetur et error voluptate omnis aliquam consequuntur facere voluptatem corporis repudiandae magnam?
                    </p>
                    <div className='bg-white w-full h-50 shadow-2xl'></div>
                </div>
            </section>
            <section className='bg-slate-100 p-5 text-sm md:text-base space-y-6 md:px-32 md:py-10 flex items-center flex-col'>
                <p className='2xl:w-[1200px]'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae eligendi corrupti repellendus minus accusantium distinctio provident labore velit ducimus adipisci cum excepturi corporis inventore, ratione quod consectetur. Consequatur vitae laboriosam sit veniam optio recusandae quam! Facere vel cum esse in corporis veritatis praesentium perspiciatis unde natus odio? Explicabo, provident? Molestias.
                </p>
                <p className='2xl:w-[1200px]'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente repudiandae, in nemo excepturi earum explicabo nihil aliquam, mollitia quidem, deleniti quasi facere quo? Suscipit aspernatur placeat illum, soluta natus ipsa, id consequatur voluptatibus magni quam assumenda? Perferendis eaque voluptates dicta placeat voluptas alias quos, explicabo incidunt velit assumenda temporibus quae. Itaque aliquam necessitatibus a voluptatibus, dolor fugit fugiat exercitationem perferendis.
                </p>
                <p className='2xl:w-[1200px]'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam natus voluptates molestias asperiores, nesciunt suscipit rem, pariatur amet odio, optio quo illo tempore velit cumque est sunt! Vitae quos repudiandae modi sapiente, incidunt aperiam voluptatem velit cumque aliquam neque perspiciatis quia dolorem totam corporis sunt? Officia nostrum consequatur nemo saepe?
                </p>
            </section>
            <Footer />
        </div>
    )
}

export default Biografia