import React, { useState } from 'react';
import instance from '../hooks/instance';

function PostNoticias() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [image, setImage] = useState(null);

    const userId = 'a1d4072d-8237-463a-a0be-d5598342f87c';

    const handleImageChange = (event) => {
        setImage(event.target.files[0]);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData();
        formData.append('title', title);
        formData.append('content', content);
        formData.append('userId', userId);
        formData.append('image', image);

        try {
            const response = await instance.post('/posts', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            console.log('Post criado com sucesso:', response.data);
            alert('Post criado com sucesso!');
        } catch (error) {
            console.error('Erro ao criar o post:', error);
            alert('Erro ao criar o post. Tente novamente.');
        }
    };

    return (
        <div className='flex flex-col items-center justify-center min-h-screen bg-slate-950 text-white'>
            <h1 className='text-3xl mb-8 font-bold'>Postar Noticias</h1>
            <form
                className='bg-slate-800 px-6 py-8 rounded shadow-md max-w-[550px] w-80 md:w-1/2 lg:w-1/3'
                onSubmit={handleSubmit}
            >
                <div className='flex flex-row items-center mb-4 gap-4'>
                    <label>Titulo:</label>
                    <input
                        type="text"
                        name="titulo"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                        className='bg-slate-100 text-slate-900 p-1 rounded w-full'
                    />
                </div>
                <div className='flex flex-row items-center mb-4 gap-4'>
                    <label>Texto:</label>
                    <textarea
                        name="texto"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        required
                        className='bg-slate-100 text-slate-900 p-1 rounded w-full'
                    ></textarea>
                </div>
                <div className='flex flex-row items-center mb-4 gap-4'>
                    <label>Imagem:</label>
                    <input
                        type="file"
                        name="imagem"
                        accept="image/*"
                        onChange={handleImageChange}
                        className='bg-slate-100 text-slate-900 p-1 rounded w-full'
                    />
                </div>
                <button type="submit" className='bg-slate-500 w-full text-xl font-medium text-white px-4 py-2 rounded'>Postar</button>
            </form>
        </div>
    );
}

export default PostNoticias;