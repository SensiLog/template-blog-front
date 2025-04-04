import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import DocLei from '../components/DocLei'
import { formatTextWithLineBreaks } from '../hooks/utils.js';

function ConteudoLei() {
    const textoExemplo = `
        Art. 1º Fica garantido aos corretores de imóveis e advogados,
        no exercício da profissão, atendimento prioritário nas repartições
        públicas do Município e nas empresas concessionárias de serviços públicos
        sob a jurisdição municipal.

        § 1º São considerados corretores de imóveis aqueles legalmente habilitados
        que realizaram o curso Técnico em Transações Imobiliárias (TTI – nível técnico)
        ou o curso superior em negócios imobiliários e que se encontram regularmente
        inscritos no Conselho Regional de Corretores de Imóveis da 1ª Região/RJ – CRECI/RJ.

        § 2º São considerados advogados aqueles legalmente habilitados e devidamente
        inscritos na Ordem dos Advogados do Brasil – OAB/RJ.
  `;

    return (
        <div>
            <Header />
            <div className='bg-slate-800 h-[20vh] md:h-[30vh] flex items-center justify-center'>
                <h1 className='font-bold text-3xl md:text-5xl text-white'>LEI 1</h1>
            </div>
            <div className='bg-slate-100 w-full flex flex-col justify-center items-center p-8 md:p-12 space-y-4'>
                <h1 className='font-bold text-2xl md:text-3xl'>EMENTA:</h1>
                <p className='2xl:w-[1500px] text-center'>Inclui na Lei nº 5.242, de 2011, a Venerável Irmandade de Santo Elesbão e Santa Ephigênia do Rio de Janeiro como de utilidade pública.</p>
                <DocLei
                    autor='Vereador Fulano de Tal'
                    conteudo={formatTextWithLineBreaks(textoExemplo)}
                />
            </div>
            <Footer />
        </div>
    )
}

export default ConteudoLei