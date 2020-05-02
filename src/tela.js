const util = Util

const ID_CONTEUDO = 'conteudo'
const ID_BTN_JOGAR = 'jogar'
const ID_MENSAGEM = 'mensagem'
const CLASSE_INVISIVEL = 'invisible'
const ID_CARREGANDO = 'carregando'
const ID_CONTADOR = 'contador'
const ID_BTN_MOSTRAR = 'mostrarTudo'

const MENSAGENS = {
  sucesso: {
    texto: 'Combinação correta! Você escolheu ',
    classe: 'alert-success'
  },
  erro: {
    texto: 'Errou :wrong:! ',
    classe: 'alert-danger'
  },
}

class Tela {
  static obterCodigoHtml(item) {
    return `
    <div class="col-2 col-md-1 col-sm-3">
      <div class="card" style="width: 100%;" onclick="window.verificarSelecao('${item.id}', '${item.nome}')">
        <img src="${item.img}" name="${item.nome}" id="${item.id}" class="card-img-top" alt="${item.nome}">
      </div>
      <br />
    </div>
    `
  }

  static configurarBotaoVerificarSelecao(funcaoOnClick) {
    window.verificarSelecao = funcaoOnClick
  }

  static alterarConteudoHTML(codigoHtml) {
    const conteudo = document.getElementById(ID_CONTEUDO)
    conteudo.innerHTML = codigoHtml
  }

  static gerarStringHTMLPelaImagem(itens) {
    return itens.map(Tela.obterCodigoHtml).join('')
  }

  static atualizarImagens(itens) {
    const codigoHtml = Tela.gerarStringHTMLPelaImagem(itens)
    Tela.alterarConteudoHTML(codigoHtml)
  }

  static configurarBotaoJogar(funcaoOnClick) {
    const btnJogar = document.getElementById(ID_BTN_JOGAR)
    btnJogar.onclick = funcaoOnClick
  }

  static exibirHerois(nomeDoHeroi, img) {
    const elementosHtml = document.getElementsByName(nomeDoHeroi)
    elementosHtml.forEach(item => (item.src = img))
  }

  static exibirCarta(idDoHeroi, img) {
    const elementosHtml = document.getElementById(idDoHeroi)
    elementosHtml.src = img
  }

  static async exibirMensagem(sucesso = true, nomeDoHeroi = '') {
    const elemento = document.getElementById(ID_MENSAGEM)

    if (sucesso) {
      elemento.classList.remove(MENSAGENS.erro.classe)
      elemento.classList.add(MENSAGENS.sucesso.classe)
      elemento.innerText = MENSAGENS.sucesso.texto.concat(nomeDoHeroi.toUpperCase())
    } else {
      elemento.classList.remove(MENSAGENS.sucesso.classe)
      elemento.classList.add(MENSAGENS.erro.classe)
      elemento.innerText = MENSAGENS.erro.texto.concat(nomeDoHeroi.toUpperCase())
    }

    elemento.classList.remove(CLASSE_INVISIVEL)
    await util.timeout(1000)
    elemento.classList.add(CLASSE_INVISIVEL)
  }

  static exibirCarregando(mostrar = true) {
    const carregando = document.getElementById(ID_CARREGANDO)

    if (mostrar) {
      carregando.classList.remove(CLASSE_INVISIVEL)
      return;
    }

    carregando.classList.add(CLASSE_INVISIVEL)
  }

  static iniciarContador() {
    let contarAte = 5

    const elementoContador = document.getElementById(ID_CONTADOR)
    const identificadorNoTexto = '$$contador'
    const textoPadrao = `Começando em ${identificadorNoTexto} segundos...`

    const atualizarTexto = () => (
      elementoContador.innerHTML = textoPadrao.replace(identificadorNoTexto, contarAte--)
    )

    atualizarTexto()

    const idDoIntervalor = setInterval(atualizarTexto, 1000)
    return idDoIntervalor
  }

  static limparContador(idDoIntervalor) {
    clearInterval(idDoIntervalor)
    document.getElementById(ID_CONTADOR).innerHTML = ''
  }

  static configurarBotaoMostrarTudo(funcaoOnClick) {
    const btnMostrarTudo = document.getElementById(ID_BTN_MOSTRAR)
    btnMostrarTudo.onclick = funcaoOnClick
  }
}
