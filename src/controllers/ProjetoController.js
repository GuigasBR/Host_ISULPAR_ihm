/**
 * CONTROLLER: Recebe as ações do utilizador na View, consulta o Model
 * e solicita a atualização da interface.
 */
export class ProjetoController {
  constructor(model, view) {
    this.model = model;
    this.view = view;
  }

  inicializar() {
    // Carrega todos os cartões ao abrir a página
    this.filtrarProjetos("todos");
    this._registrarEventos();
  }

  filtrarProjetos(filtro) {
    const projetosFiltrados = this.model.listarPorFiltro(filtro);
    this.view.atualizarBotoesFiltro(filtro);
    this.view.renderizarGrade(projetosFiltrados);
  }

  _registrarEventos() {
    // Eventos dos botões de filtro (Todos, Publicados, Reservados)
    this.view.botoesFiltro.forEach((botao) => {
      botao.addEventListener("click", () => {
        const filtroEscolhido = botao.dataset.filtro;
        this.filtrarProjetos(filtroEscolhido);
      });
    });

    // Evento para os alunos copiarem o formato de envio do link
    if (this.view.botaoCopiar) {
      this.view.botaoCopiar.addEventListener("click", () => {
        const codigo = document.getElementById("codigo-exemplo").innerText;
        navigator.clipboard.writeText(codigo).then(() => {
          this.view.exibirFeedbackCopia();
        });
      });
    }
  }
}
