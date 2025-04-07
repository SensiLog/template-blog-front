import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import instance from '../hooks/instance'

function Register() {
    const [formData, setFormData] = useState({ nome: '', email: '', senha: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await instance.post('/auth/register', {
                name: formData.nome,
                email: formData.email,
                password: formData.senha,
            });
            console.log('Registro bem-sucedido:', response.data);
        } catch (error) {
            console.error('Erro ao registrar:', error);
        }
    };

    return (
        <div className='flex flex-col items-center justify-center min-h-screen bg-slate-950 text-white'>
            <h1 className='text-3xl mb-8 font-bold'>Registrar</h1>
            <form onSubmit={handleSubmit} className='bg-slate-800 px-6 py-8 rounded shadow-md max-w-[550px] w-80 md:w-1/2 lg:w-1/3'>
                <div className='flex flex-row items-center mb-4 gap-4'>
                    <label>Nome:</label>
                    <input
                        type="text"
                        name="nome"
                        value={formData.nome}
                        onChange={handleChange}
                        required
                        className='bg-slate-100 text-slate-900 p-1 rounded w-full'
                    />
                </div>
                <div className='flex flex-row items-center mb-4 gap-4'>
                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className='bg-slate-100 text-slate-900 p-1 rounded w-full'
                    />
                </div>
                <div className='flex flex-row items-center mb-4 gap-4'>
                    <label>Senha:</label>
                    <input
                        type="password"
                        name="senha"
                        value={formData.senha}
                        onChange={handleChange}
                        required
                        className='bg-slate-100 text-slate-900 p-1 rounded w-full'
                    />
                </div>
                <button type="submit" className='w-full bg-slate-700 text-xl font-medium rounded py-2 mt-4'>Registrar</button>
            </form>
            <p className='mt-4'>Já tem uma conta? <Link to="/admin/login" className='text-slate-400 hover:text-slate-300'>Login</Link></p>
            <p className='mt-4'><Link to="/" className='hover:text-slate-300'>Voltar ao início</Link></p>
        </div>
    )
}

export default Register