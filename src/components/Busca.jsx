import React from 'react'
import { Button } from '@primereact/ui/button'
import { InputText } from '@primereact/ui/inputtext'

const categorias = [
  { rotulo: 'Cafés', chave: 'catering.cafe' },
  { rotulo: 'Restaurantes', chave: 'catering.restaurant' },
  { rotulo: 'Parques', chave: 'leisure.park' },
  { rotulo: 'Farmácias', chave: 'healthcare.pharmacy' },
  { rotulo: 'Supermercados', chave: 'commercial.supermarket' },
  { rotulo: 'Museus', chave: 'entertainment.museum' }
]

export default class Busca extends React.Component {

  state = {
    categoria: null,
    raio: '1000',
    erro: null
  }

  onCategoriaEscolhida = (chave) => {
    this.setState({ categoria: chave })
  }

  onRaioAlterado = (evento) => {
    this.setState({ raio: evento.target.value })
  }

  onFormSubmit = (evento) => {
    evento.preventDefault()
    const raio = Number(this.state.raio)

    if (this.state.categoria === null) {
      this.setState({ erro: 'Escolha uma categoria.' })
      return
    }

    if (!Number.isInteger(raio) || raio < 100 || raio > 5000) {
      this.setState({ erro: 'Informe um raio inteiro entre 100 e 5000 metros.' })
      return
    }

    this.setState({ erro: null })
    this.props.onBuscaRealizada(this.state.categoria, raio)
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <div className="flex flex-column gap-3">

          <div className="flex flex-wrap gap-2">
            {
              categorias.map((categoria) => (
                <Button
                  key={categoria.chave}
                  type="button"
                  variant={this.state.categoria === categoria.chave ? undefined : 'outlined'}
                  onClick={() => this.onCategoriaEscolhida(categoria.chave)}>
                  {categoria.rotulo}
                </Button>
              ))
            }
          </div>

          <InputText
            value={this.state.raio}
            pt-root-onChange={this.onRaioAlterado}
            className="w-full"
            placeholder={this.props.dica} />

          <Button>
            <i className="pi pi-search mr-2"></i>
            Buscar
          </Button>

          {
            this.state.erro ?
              <p style={{ color: 'red', margin: 0 }}>{this.state.erro}</p>
            :
              null
          }

        </div>
      </form>
    )
  }
}

Busca.defaultProps = {
  dica: 'Raio em metros (100 a 5000)'
}