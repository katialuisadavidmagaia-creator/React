import { useNavigate } from 'react-router-dom'
import { categorias as category } from '../../Data/Poesia'
import minhaImagem from '../../../images01.jpg'

export default function Categorias() {
  const navigate = useNavigate()

  return (
    <div style={{
      backgroundImage: `url(${minhaImagem})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      minHeight: '100vh',
      padding: '60px 20px',
      position: 'relative'
    }}>
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundColor: 'rgba(8, 4, 18, 0.72)',
      }} />

      <div style={{ position: 'relative', zIndex: 1, maxWidth: '800px', margin: '0 auto' }}>
        <button
          onClick={() => navigate('/')}
          style={{
            fontFamily: "'Lato', sans-serif",
            fontSize: '0.75rem',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'rgba(220,200,170,0.5)',
            background: 'transparent',
            border: 'none',
            cursor: 'pointer',
            marginBottom: '2rem',
            padding: 0
          }}
        >
          ← Voltar
        </button>

        <h2 style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: 'clamp(1.6rem, 4vw, 2.4rem)',
          fontWeight: 400,
          color: '#f0e6d0',
          textAlign: 'center',
          marginBottom: '0.5rem'
        }}>
          Escolhe a tua ocasião
        </h2>

        <p style={{
          fontFamily: "'Lato', sans-serif",
          fontWeight: 300,
          fontSize: '0.85rem',
          color: 'rgba(220,200,170,0.5)',
          textAlign: 'center',
          letterSpacing: '0.15em',
          marginBottom: '3rem'
        }}>
          cada porta abre um mundo diferente
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.5rem'
        }}>
          {category.map((cat, i) => (
            <div
              key={cat.id}
              onClick={() => navigate(`/categoria/${cat.id}`)}
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(200,170,120,0.15)',
                borderRadius: '16px',
                padding: '2rem 1.5rem',
                cursor: 'pointer',
                transition: 'all 0.35s ease',
                animationDelay: `${i * 0.1}s`
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.09)'
                e.currentTarget.style.borderColor = 'rgba(200,170,120,0.4)'
                e.currentTarget.style.transform = 'translateY(-4px)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.04)'
                e.currentTarget.style.borderColor = 'rgba(200,170,120,0.15)'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{cat.icone}</div>
              <h3 style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: '1.6rem',
                fontWeight: 400,
                color: '#f0e6d0',
                marginBottom: '0.5rem'
              }}>
                {cat.nome}
              </h3>
              <p style={{
                fontFamily: "'Lato', sans-serif",
                fontWeight: 300,
                fontSize: '0.85rem',
                color: 'rgba(220,200,170,0.55)',
                marginBottom: '1.5rem'
              }}>
                {cat.descricao}
              </p>
              <span style={{
                fontFamily: "'Lato', sans-serif",
                fontSize: '0.7rem',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: 'rgba(200,121,65,0.8)'
              }}>
                {/* {cat.poesias.length} poesias →  */}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}