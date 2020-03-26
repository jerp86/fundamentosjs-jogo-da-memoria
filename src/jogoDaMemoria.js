class JogoDaMemoria {
  constructor({ tela }) {
    this.tela = tela

    this.heroisIniciais = [
      { img: './arquivos/batman.png', nome: 'batman' },
      { img: './arquivos/big.png', nome: 'big' },
      { img: './arquivos/capitao.png', nome: 'capitao' },
      { img: './arquivos/cyclops.png', nome: 'cyclops' },
      { img: './arquivos/dd.png', nome: 'dd' },
      { img: './arquivos/deadpool.png', nome: 'deadpool' },
      { img: './arquivos/flash.png', nome: 'flash' },
      { img: './arquivos/formiga.png', nome: 'formiga' },
      { img: './arquivos/frank.png', nome: 'frank' },
      { img: './arquivos/groot.png', nome: 'groot' },
      { img: './arquivos/hawkeye.png', nome: 'hawkeye' },
      { img: './arquivos/hellboy.png', nome: 'hellboy' },
      { img: './arquivos/iron.png', nome: 'iron' },
      { img: './arquivos/megaman.png', nome: 'megaman' },
      { img: './arquivos/miranha.png', nome: 'miranha' },
      { img: './arquivos/obiwan.png', nome: 'obiwan' },
      { img: './arquivos/super.png', nome: 'super' },
      { img: './arquivos/thor.png', nome: 'thor' },
      { img: './arquivos/wolverine.png', nome: 'wolverine' },
      { img: './arquivos/ww.png', nome: 'ww' },
    ]
  }

  inicializar() {
    this.tela.atualizarImagens(this.heroisIniciais)

    this.tela.configurarBotaoJogar(this.jogar.bind(this))
  }

  embaralhar() {
    const copias = this.heroisIniciais
      .concat(this.heroisIniciais)
      .map(item => {
        return Object.assign({}, item, { id: Math.random() / 0.5 })
      })
      .sort(() => Math.random() - 0.5)

    this.tela.atualizarImagens(copias)
  }

  jogar() {
    this.embaralhar()
  }
}
