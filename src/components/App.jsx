import React from 'react'
import { MapMarker } from '@primeicons/react'
import Cartao from './Cartao'
import Creditos from './Creditos'
import Loading from './Loading'

class App extends React.Component {

  state = {
    latitude: null,
    longitude: null,
    horarioLocalizacao: null,
    mensagemDeErro: null
  }

  obterLocalizacao = () => {
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          horarioLocalizacao: Date.now(),
          mensagemDeErro: null
        })
      },
      (erro) => {
        console.log(erro)
        this.setState({
          mensagemDeErro: 'Não foi possível obter sua localização. Libere o acesso no navegador e atualize a página.'
        })
      }
    )
  }

  componentDidMount() {
    this.obterLocalizacao()
  }

  obterAno = () => {
    return new Date().getFullYear()
  }

  render() {
    const estiloSubtitulo = {
      color: "gray",
      fontSize: "18px",
      margin: 0
    }

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

        {
          this.state.mensagemDeErro ?
            <p>{this.state.mensagemDeErro}</p>
          :
          this.state.latitude === null ?
            <Loading mensagem="Aguardando permissão de localização..." />
          :
            <p>Localização obtida: {this.state.latitude}, {this.state.longitude}</p>
        }

        <div className="rodape">
          <p>RolêRadar © {this.obterAno()}</p>
        </div>

      </div>
    )
  }
}

export default App