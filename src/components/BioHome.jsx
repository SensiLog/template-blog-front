import React from 'react'
import { NavLink } from 'react-router-dom'

function Bio() {
    return (
        <div className='flex items-center justify-around text-sm md:text-base px-5 py-10'>
            <section className='lg:w-2/5 md:px-12 space-y-6 h-full flex flex-col items-start justify-center'>
                <h1 className='text-slate-900 font-bold md:text-4xl text-2xl italic'>VEREADOR FULANO DE TAL</h1>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic veritatis corporis mollitia culpa iusto ipsa, a alias. Quidem accusantium distinctio ipsum illo dolorem tempore rerum similique, laboriosam saepe quis, voluptate cupiditate, quo tempora harum dicta. Molestias laboriosam cum quidem magni veritatis ipsum dolores exercitationem adipisci suscipit fugiat ratione distinctio aperiam et quis a odit, dolorem, commodi quos cumque. Fugit atque ducimus fugiat perferendis quidem vel. Mollitia quia est laborum deserunt.
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Et voluptatum cumque culpa inventore alias ipsam? Nostrum exercitationem, tempore eligendi, repellat fuga a, necessitatibus atque doloribus eaque quisquam obcaecati laborum? Labore optio modi excepturi veritatis quisquam fugit voluptatum illum soluta aspernatur doloribus! Praesentium aliquam adipisci harum ducimus, provident beatae reprehenderit ex.
                </p>
                <NavLink to='/biografia'>
                    <button className='bg-slate-900 text-white font-bold md:text-lg px-4 py-2 rounded cursor-pointer transition-colors hover:bg-slate-500'>BIOGRAFIA COMPLETA</button>
                </NavLink>
            </section>
            <section className='hidden w-2/5 lg:flex items-center justify-center h-[40vh] bg-slate-200'>
                box
            </section>
        </div>
    )
}

export default Bio