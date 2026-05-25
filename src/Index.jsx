import React from 'react'
import { useState } from 'react'
import minhaImagem from './assets/IMG-20260509-WA0001.jpg';
import { useNavigate } from 'react-router-dom';

const Index = () => {
    const versos = [
        "O vento traz segredos que a alma finge não ouvir, segredos que os olhos se recusam a enxergar....",
        "Na melancolia do outono, cada folha que cai é um verso sem rima, e a cada estrofe um novo verso em significado prévio...",
        "A natureza não tem pressa, mas tudo floresce no seu tempo, na mesma intensidade que as palavras correm na mente de quem escreve....",
        "O silêncio da noite escreve poemas nas estrelas, e o sol precisa sumir para não apagar o que está selado por um destino....",
        "Escrever é transformar a dor do mundo em melodia, e procurar tornar leve o que olhamos como fardo....",
        "Há uma sonoridade bonita nas palavras que guardamos no peito, grande parte das vezes a boca não consegue dizer nem os olhos expressar ...."
    ]

    const [versoAtual, setVersoAtual] = useState("Clique no botão abaixo e deixe a sua mente viajar...")

    const gerarInspiracao = () => {
        const numeroAleatorio = Math.floor(Math.random() * versos.length)
        setVersoAtual(versos[numeroAleatorio])
    }

    const navigate = useNavigate()


    return (
        <div
            style={{
                textAlign: 'center',
                padding: '50px',
                fontFamily: 'sans-serif',
                backgroundImage: `url(${minhaImagem})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >

            <h1>Gerador de Inspiração Poética</h1>

            <p style={{ fontSize: '1.2rem', color: '#ddd', marginBottom: '20px' }}>
                Procurando colher versos perdidos no vento
            </p>


            <div
                style={{
                    margin: '40px auto',
                    padding: '30px',
                    maxWidth: '500px',
                    minHeight: '60px',
                    backgroundColor: 'rgba(66, 46, 46, 0.04)',
                    borderRadius: '15px',
                    border: '1px dashed rgba(126, 69, 69, 0.24)',
                    boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
                    fontSize: '1.2rem',
                    color: '#fcf5f5'
                }}>
                "{versoAtual}"
            </div>


            <div>
                <button style={{
                    display: 'inline-block',
                    textDecoration: 'none',
                    padding: '12px 24px',
                    backgroundColor: '#722f372d',
                    color: 'white',
                    borderRadius: '25px',
                    fontWeight: 'bold'
                }} onClick={() => navigate("teste")}>
                    Inspire-se
                </button>
            </div>
        </div>
    )
}

export default Index
