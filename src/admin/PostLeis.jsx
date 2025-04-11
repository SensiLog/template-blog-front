import React, { useState } from 'react';
import instance from '../hooks/instance';

function PostLeis() {
    const [numeroLei, setNumeroLei] = useState('');
    const [ementa, setEmenta] = useState('');
    const [conteudoLei, setConteudoLei] = useState('');
    const [statusLei, setStatusLei] = useState('PROJETO'); // Valor inicial do enum
    const userId = 'a1d4072d-8237-463a-a0be-d5598342f87c'; // ID fixo do usuário

    const handleSubmit = async (event) => {
        event.preventDefault();

        const payload = {
            numeroLei,
            userId,
            ementa,
            conteudoLei,
            statusLei,
        };

        try {
            console.log('Payload:', payload);
            const response = await instance.post('/leis', payload); // Envia o payload diretamente
            console.log('Lei criada com sucesso:', response.data);
            alert('Lei criada com sucesso!');
        } catch (error) {
            console.error('Erro ao criar a lei:', error.response?.data || error.message);
            alert(`Erro ao criar a lei: ${error.response?.data?.message || 'Tente novamente.'}`);
        }
    };

    return (
        <div className='flex flex-col items-center justify-center min-h-screen bg-slate-950 text-white'>
            <h1 className='text-3xl mb-4 font-bold'>Postar Leis</h1>
            <button className='bg-slate-700 cursor-pointer hover:bg-slate-600 transition text-xl font-medium text-white px-4 py-2 rounded mb-4' onClick={() => window.history.back()}>
                Voltar
            </button>
            <form
                className='bg-slate-800 px-6 py-8 rounded shadow-md max-w-[550px] w-80 md:w-1/2 lg:w-1/3'
                onSubmit={handleSubmit}
            >
                <div className='flex flex-col mb-4'>
                    <label>Número da Lei:</label>
                    <input
                        type="text"
                        value={numeroLei}
                        onChange={(e) => setNumeroLei(e.target.value)}
                        required
                        className='bg-slate-100 text-slate-900 p-2 rounded'
                    />
                </div>
                <div className='flex flex-col mb-4'>
                    <label>Ementa:</label>
                    <input
                        type="text"
                        value={ementa}
                        onChange={(e) => setEmenta(e.target.value)}
                        required
                        className='bg-slate-100 text-slate-900 p-2 rounded'
                    />
                </div>
                <div className='flex flex-col mb-4'>
                    <label>Conteúdo da Lei:</label>
                    <textarea
                        value={conteudoLei}
                        onChange={(e) => setConteudoLei(e.target.value)}
                        required
                        className='bg-slate-100 text-slate-900 p-2 rounded'
                    ></textarea>
                </div>
                <div className='flex flex-col mb-4'>
                    <label>Status da Lei:</label>
                    <select
                        value={statusLei}
                        onChange={(e) => setStatusLei(e.target.value)}
                        required
                        className='bg-slate-100 text-slate-900 p-2 rounded'
                    >
                        <option value="PROJETO">PROJETO</option>
                        <option value="SANCIONADA">SANCIONADA</option>
                    </select>
                </div>
                <button
                    type="submit"
                    className='cursor-pointer bg-slate-500 w-full text-xl font-medium text-white px-4 py-2 rounded'
                >
                    Postar
                </button>
            </form>
        </div>
    );
}

export default PostLeis;