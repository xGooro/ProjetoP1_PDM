import { MapMarker } from '@primeicons/react'
import Cartao from './Cartao'
import Creditos from './Creditos'

const estiloSubtitulo = {
  color: "gray",
  fontSize: "18px",
  margin: 0
}

const obterAno = () => {
  return new Date().getFullYear()
}

const App = () => {
  return (
    <div className="flex flex-column align-items-center p-3">

      <div className="flex flex-column align-items-center gap-1">

        <div className="flex align-items-center gap-2">
          <MapMarker size={32} />
          <h1 className="titulo">RolêRadar</h1>
        </div>

        <div className="flex align-items-center">
          <p style={estiloSubtitulo}>
            Descubra o que existe perto de você
          </p>
        </div>

        <Creditos />

      </div>

      <div className="m-4">
        <Cartao cabecalho="Teste do cartão">
          <p>Conteúdo do cartão</p>
        </Cartao>
      </div>

      <div className="rodape">
        <p>RolêRadar © {obterAno()}</p>
      </div>

    </div>
  )
}

export default App