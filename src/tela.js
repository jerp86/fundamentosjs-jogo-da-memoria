const util = Util

const ID_CONTEUDO = 'conteudo'
const ID_BTN_JOGAR = 'jogar'
const ID_MENSAGEM = 'mensagem'
const CLASSE_INVISIVEL = 'invisible'
const ID_CARREGANDO = 'carregando'
const ID_CONTADOR = 'contador'

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
    <div class="col-md-2">
      <div class="card" style="width: 50%;" onclick="window.verificarSelecao('${item.id}', '${item.nome}')">
        <img src="${item.img}" name="${item.nome}" class="card-img-top" alt="${item.nome}">
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
}
