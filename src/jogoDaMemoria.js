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
    this.iconePadrao = './arquivos/padrao.png'
    this.heroisEscondidos = []
    this.heroisSelecionados = []
  }

  inicializar() {
    this.tela.atualizarImagens(this.heroisIniciais)

    this.tela.configurarBotaoJogar(this.jogar.bind(this))
    this.tela.configurarBotaoVerificarSelecao(this.verificarSelecao.bind(this))
  }

  embaralhar() {
    const copias = this.heroisIniciais
      .concat(this.heroisIniciais)
      .map(item => {
        return Object.assign({}, item, { id: Math.random() / 0.5 })
      })
      .sort(() => Math.random() - 0.5)

    this.tela.atualizarImagens(copias)
    setTimeout(() => {
      this.esconderHerois(copias)
    }, 5000)
  }

  esconderHerois(herois) {
    const heroisOcultos = herois.map(({ nome, id }) => ({
      id,
      nome,
      img: this.iconePadrao
    }))

    this.tela.atualizarImagens(heroisOcultos)

    this.heroisOcultos = heroisOcultos
  }

  exibirHerois(nomeDoHeroi) {
    const { img } = this.heroisIniciais.find(({ nome }) => nomeDoHeroi === nome)

    this.tela.exibirHerois(nomeDoHeroi, img)
  }

  verificarSelecao(id, nome) {
    const item = { id, nome }
    // alert(`Olá ${item.nome}, ${item.id}`)
    const heroisSelecionados = this.heroisSelecionados.length
    switch (heroisSelecionados) {
      case 0:
        this.heroisSelecionados.push(item)
        break;
      case 1:
        const [opcao1] = this.heroisSelecionados
        this.heroisSelecionados = []

        if (opcao1.nome === item.nome && opcao1.id !== item.id) {
          // alert(`Combinação correta! Você escolheu: ${item.nome.toUpperCase()}`)
          this.exibirHerois(item.nome)
          this.tela.exibirMensagem(true, item.nome)
          return;
        }

        if (opcao1.nome === item.nome) {
          this.tela.exibirMensagem(false, opcao1.nome.concat(' na mesma posição!'))
          return;
        }

        // alert('Opção incorreta!! :wrong:')
        this.tela.exibirMensagem(false, opcao1.nome.concat(' e ').concat(item.nome))
        break;
    }
  }

  jogar() {
    this.embaralhar()
  }
}
