import React, { useState } from 'react';
import instance from '../hooks/instance';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setError('');

        try {
            const response = await instance.post('/auth/login', { email, password });
            console.log('Login successful:', response.data);
            navigate('/admin/postnoticias');
        } catch (err) {
            console.error('Login failed:', err);
            setError('Invalid email or password');
        }
    };

    return (
        <div className='flex flex-col items-center justify-center min-h-screen bg-slate-950 text-white'>
            <h1 className='text-3xl mb-8 font-bold'>Login</h1>
            <form onSubmit={handleLogin} className='bg-slate-800 px-6 py-8 rounded shadow-md max-w-[550px] w-80 md:w-1/2 lg:w-1/3'>
                <div className='flex flex-row items-center mb-4 gap-4'>
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className='bg-slate-100 text-slate-900 p-1 rounded w-full'
                    />
                </div>
                <div className='flex flex-row items-center mb-4 gap-4'>
                    <label>Senha:</label>
                    <div className='relative w-full'>
                        <input
                            type={showPassword ? 'text' : 'password'}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className='bg-slate-100 text-slate-900 p-1 rounded w-full pr-9'
                        />
                        <i
                            className={`fa-solid ${showPassword ? 'fa-eye' : 'fa-eye-slash'} absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer text-slate-700`}
                            onClick={() => setShowPassword(!showPassword)}
                        ></i>
                    </div>
                </div>
                {error && <p style={{ color: 'red' }}>{error}</p>}
                <button type="submit" className='w-full bg-slate-700 text-xl font-medium rounded py-2 mt-4'>Login</button>
            </form>
            <p className='mt-4'>Não tem uma conta? <Link to="/admin/register" className='text-slate-400 hover:text-slate-300'>Registrar</Link></p>
            <p className='mt-4'><Link to="/" className='hover:text-slate-300'>Voltar ao início</Link></p>
        </div>
    );
}

export default Login;