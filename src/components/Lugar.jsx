import Cartao from './Cartao'

const estiloNumero = {
  width: '2.5rem',
  height: '2.5rem',
  borderRadius: '50%',
  backgroundColor: '#1565c0',
  color: 'white',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontWeight: 'bold',
  flexShrink: 0
}

const formatarDistancia = (distancia) => {
  if (distancia < 1000) {
    return `a ${Math.round(distancia)} m`
  }
  return `a ${(distancia / 1000).toFixed(1).replace('.', ',')} km`
}

const Lugar = ({ numero, nome, endereco, distancia }) => {
  return (
    <Cartao cabecalho={formatarDistancia(distancia)}>
      <div className="flex align-items-center gap-3">
        <div style={estiloNumero}>{numero}</div>
        <div>
          <strong>{nome ? nome : 'Sem nome'}</strong>
          <p className="m-0">{endereco}</p>
        </div>
      </div>
    </Cartao>
  )
}

export default Lugar