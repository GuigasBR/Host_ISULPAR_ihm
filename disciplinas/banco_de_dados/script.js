function abrirAba(idSecao, elementoBotao) {
  document.querySelectorAll(".secao-aba").forEach(secao => {
    secao.classList.remove("ativa");
    secao.setAttribute("hidden", "");
  });

  document.querySelectorAll(".botao-aba").forEach(botao => {
    botao.classList.remove("ativo");
    botao.setAttribute("aria-selected", "false");
  });

  const secaoSelecionada = document.getElementById(idSecao);
  if (!secaoSelecionada) return;

  secaoSelecionada.classList.add("ativa");
  secaoSelecionada.removeAttribute("hidden");
  elementoBotao.classList.add("ativo");
  elementoBotao.setAttribute("aria-selected", "true");
  voltarAoTopo();
}

function voltarAoTopo() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// Mantém somente a primeira seção visível ao carregar a página.
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".secao-aba").forEach(secao => {
    if (!secao.classList.contains("ativa")) secao.setAttribute("hidden", "");
  });
});
