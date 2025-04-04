import React from 'react';
import { formatTextWithLineBreaks } from '../hooks/utils.js';

function DocLei(props) {
    const textoFormatado = formatTextWithLineBreaks(props.conteudo);

    return (
        <div className='bg-white mt-6 rounded-md shadow-md p-8 md:p-12'>
            <h1 className='font-bold md:text-lg text-end'>Autor(es): {props.autor}</h1>
            <p className='font-medium text-sm md:text-base' dangerouslySetInnerHTML={{ __html: textoFormatado }} />
        </div>
    );
}

export default DocLei;