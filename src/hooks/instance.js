import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://nest-blog-api-kuyq.onrender.com/', // URL base da API
    headers: {
        'Content-Type': 'application/json',
    },
});

export default instance;