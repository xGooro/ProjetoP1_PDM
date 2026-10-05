const App = () => {
  const estiloSubtitulo = {
    color: "gray",
    fontSize: "18px"
  }

  function obterAno() {
    return new Date().getFullYear()
  }

  return (
    <>
      <h1 className="titulo">RolêRadar</h1>

      <p style={estiloSubtitulo}>
        Descubra o que existe perto de você
      </p>

      <footer>
        RolêRadar © {obterAno()}
      </footer>
    </>
  )
}

export default App
