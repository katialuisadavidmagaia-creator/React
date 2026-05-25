import { useNavigate } from 'react-router-dom'
import minhaImagem from '../../../download01.jpg'

export default function Home() {
  const navigate = useNavigate()

  return (
    <div style={{
      backgroundImage: `url(${minhaImagem})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      padding: '50px 20px',
      position: 'relative'
    }}>
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundColor: 'rgba(10, 5, 20, 0.55)',
      }} />

      <div style={{ position: 'relative', zIndex: 1 }}>
        <p style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: '0.85rem',
          letterSpacing: '0.3em',
          textTransform: 'uppercase',
          color: 'rgba(220,200,170,0.6)',
          marginBottom: '1rem'
        }}>
          uma jornada em versos
        </p>

        <h1 style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: 'clamp(2rem, 5vw, 3.2rem)',
          fontWeight: 400,
          color: '#f0e6d0',
          lineHeight: 1.2,
          marginBottom: '1rem',
          textShadow: '0 2px 20px rgba(0,0,0,0.5)'
        }}>
          Gerador de<br />Inspiração Poética
        </h1>

        <div style={{
          width: '50px',
          height: '1px',
          background: 'linear-gradient(90deg, transparent, #c87941, transparent)',
          margin: '1.5rem auto'
        }} />

        <p style={{
          fontFamily: "'Lato', sans-serif",
          fontWeight: 300,
          fontSize: '1rem',
          color: 'rgba(240,230,210,0.7)',
          marginBottom: '3rem',
          maxWidth: '360px'
        }}>
          Escolhe uma ocasião e deixa os versos encontrarem-te
        </p>

        <button
          onClick={() => navigate('/categorias')}
          style={{
            fontFamily: "'Lato', sans-serif",
            fontSize: '0.8rem',
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            color: '#f0e6d0',
            background: 'transparent',
            border: '1px solid rgba(200,170,120,0.5)',
            borderRadius: '50px',
            padding: '14px 40px',
            cursor: 'pointer',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={e => {
            e.target.style.background = 'rgba(200,121,65,0.2)'
            e.target.style.borderColor = 'rgba(200,121,65,0.8)'
          }}
          onMouseLeave={e => {
            e.target.style.background = 'transparent'
            e.target.style.borderColor = 'rgba(200,170,120,0.5)'
          }}
        >
           Inspire-se
        </button>
      </div>
    </div>
  )
}