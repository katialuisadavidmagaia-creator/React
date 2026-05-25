import { useNavigate, useParams } from 'react-router-dom'
import { categorias } from '../../Data/Poesia'
import minhaImagem from '../../../images02.jpg'

export default function Poesias() {
  const { id } = useParams()
  const navigate = useNavigate()
  const categoria = categorias.find(c => c.id === id)

  // if (!categoria) return <p style={{ color: '#fff', padding: '2rem' }}>Categoria não encontrada.</p>

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
        backgroundColor: 'rgba(8, 4, 18, 0.78)',
      }} />

      <div style={{ position: 'relative', zIndex: 1, maxWidth: '640px', margin: '0 auto' }}>
        <button
          onClick={() => navigate('/categorias')}
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
          ← Categorias
        </button>

        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          {/* <div style={{ fontSize: '3rem', marginBottom: '0.75rem' }}>{categoria.icone}</div> */}
          <h2 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(1.8rem, 4vw, 2.6rem)',
            fontWeight: 400,
            color: '#f0e6d0',
            marginBottom: '0.5rem'
          }}>
            {/* {categoria.nome} */}
          </h2>
          <p style={{
            fontFamily: "'Lato', sans-serif",
            fontWeight: 300,
            fontSize: '0.85rem',
            color: 'rgba(220,200,170,0.5)',
            letterSpacing: '0.15em'
          }}>
            {/* {categoria.descricao} */}
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {/* {categoria.poesias.map((poesia, i) => (
            <div
              key={i}
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(200,170,120,0.15)',
                borderRadius: '16px',
                padding: '2rem',
                position: 'relative'
              }}
            >
              <span style={{
                position: 'absolute',
                top: '-14px',
                left: '20px',
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: '4rem',
                color: 'rgba(200,121,65,0.25)',
                lineHeight: 1
              }}>
                "
              </span>
              <h4 style={{
                fontFamily: "'Lato', sans-serif",
                fontSize: '0.7rem',
                letterSpacing: '0.25em',
                textTransform: 'uppercase',
                color: 'rgba(200,121,65,0.7)',
                marginBottom: '1.2rem'
              }}>
                {poesia.titulo}
              </h4>
              {poesia.versos.map((verso, j) => (
                <p
                  key={j}
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontStyle: 'italic',
                    fontSize: '1.15rem',
                    lineHeight: 1.9,
                    color: '#e0cdb5',
                    margin: 0
                  }}
                >
                  {verso}
                </p>
              ))}
            </div>
          ))} */}
        </div>
      </div>
    </div>
  )
}