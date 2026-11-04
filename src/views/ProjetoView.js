/**
 * VIEW: Responsável apenas pela exibição e atualização visual do DOM.
 * Não armazena dados fixos nem regras de negócio.
 */
export class ProjetoView {
  constructor() {
    this.containerGrade = document.getElementById("grade");
    this.botoesFiltro = document.querySelectorAll(".botao-aba[data-filtro]");
    this.botaoCopiar = document.getElementById("btn-copiar-modelo");
  }

  // Renderiza a lista de cartões recebida do Controller
  renderizarGrade(listaProjetos) {
    if (!this.containerGrade) return;

    this.containerGrade.innerHTML = listaProjetos
      .map((item) => this._criarTemplateCartao(item))
      .join("");
  }

  // Define o visual do cartão conforme a disponibilidade do link
  _criarTemplateCartao(item) {
    const estaPublicado = item.status === "publicado" && item.url;

    const badgeHTML = estaPublicado
      ? `<span class="badge badge-ativo">Publicado</span>`
      : `<span class="badge badge-reservado">Espaço Reservado</span>`;

    const acaoHTML = estaPublicado
      ? `<a href="${item.url}" class="btn-primario">Acessar Projeto</a>`
      : `<span class="btn-desabilitado" title="Aguardando envio do link pelo grupo">Aguardando Link da Equipe</span>`;

    return `
      <article class="cartao ${estaPublicado ? "" : "cartao-reservado"}">
        <div class="cartao-topo">
          ${badgeHTML}
        </div>
        <h3>${item.id}. ${item.nome}</h3>
        <p class="cartao-equipe">${item.equipe}</p>
        <div class="cartao-rodape">
          ${acaoHTML}
        </div>
      </article>
    `;
  }

  // Atualiza qual botão de filtro está com a classe '.ativo'
  atualizarBotoesFiltro(filtroAtivo) {
    this.botoesFiltro.forEach((botao) => {
      botao.classList.toggle("ativo", botao.dataset.filtro === filtroAtivo);
    });
  }

  // Feedback visual ao copiar o bloco de código
  exibirFeedbackCopia() {
    if (!this.botaoCopiar) return;
    const textoOriginal = this.botaoCopiar.textContent;
    this.botaoCopiar.textContent = "✔ Modelo Copiado!";
    setTimeout(() => {
      this.botaoCopiar.textContent = textoOriginal;
    }, 2000);
  }
}
