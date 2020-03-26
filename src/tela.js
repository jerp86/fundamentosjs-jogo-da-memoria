const ID_CONTEUDO = 'conteudo'

class Tela {
  static obterCodigoHtml(item) {
    return `
    <div class="col-md-3">
      <div class="card" style="width: 18rem;">
        <img src="${item.img}" name="${item.nome}" class="card-img-top" alt="${item.nome}">
      </div>
      <br />
    </div>
    `
  }

  static alterarConteudoHTML(codigoHtml) {
    const conteudo = document.getElementById(ID_CONTEUDO)
    conteudo.innerHTML = codigoHtml
  }

  static gerarStringHTMLPelaImagem(itens) {
    // para cada item da lista, vai executar a função obterCodigoHtml ao final,
    // vai concatenar tudo em uma única string
    // muda de Array para String
    return itens.map(Tela.obterCodigoHtml).join('')
  }

  static atualizarImagens(itens) {
    const codigoHtml = Tela.gerarStringHTMLPelaImagem(itens)
    Tela.alterarConteudoHTML(codigoHtml)
  }
}
