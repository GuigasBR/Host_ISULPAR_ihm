export class ProjetoModel {
  constructor() {
    this.projetos = [
      {
        id: 1,
        nome: "Interação Humano-Computador",
        equipe: "Edinei, Guilherme e Equipe",
        status: "publicado",
        url: "disciplinas/disciplina-ihm.html"
      },
      {
        id: 2,
        nome: "Engenharia de Software",
        equipe: "Maria Luísa e Matheus Scremim",
        status: "publicado",
        url: "disciplinas/engenharia/Engenharia_de_software/disciplina-2.html"
      },
      {
        id: 3,
        nome: "Desenvolvimento Web",
        equipe: "Espaço reservado para a equipe",
        status: "reservado",
        url: null
      },
      {
        id: 4,
        nome: "Redes de Computadores",
        equipe: "Espaço reservado para a equipe",
        status: "reservado",
        url: null
      },
      {
        id: 5,
        nome: "Sistemas Operacionais",
        equipe: "Yuri Cesar e João Gabriel",
        status: "publicado",
        url: "disciplinas/sistemas_operacionais/disciplina-5.html"
      },
      {
        id: 6,
        nome: "Administração de Redes I",
        equipe: "João Pedro e Ricardo",
        status: "publicado",
        url: "disciplinas/redes-1/administracao_redes_1_site/redes1/index.html"
      },
      {
        id: 7,
        nome: "Programação Orientada a Objetos",
        equipe: "Espaço reservado para a equipe",
        status: "reservado",
        url: null
      },
      {
        id: 8,
        nome: "Segurança da Informação",
        equipe: "Espaço reservado para a equipe",
        status: "reservado",
        url: null
      },
      {
        id: 9,
        nome: "Inteligência Artificial",
        equipe: "Rafael e Valmir",
        status: "publicado",
        url: "disciplinas/disciplina-9.html"
      },
      {
        id: 10,
        nome: "Redes de Computadores 2",
        equipe: "Miguel Colodel, Nykollas Armindo e Vitor Brunetto",
        status: "publicado",
        url: "disciplinas/redes-2/redes.html"
      },
      {
        id: 11,
        nome: "Banco de Dados",
        equipe: "Daniel Correa e Alan Alipio",
        status: "publicado",
        url: "disciplinas/banco_de_dados/index.html"
      }
    ];
  }

  listarPorFiltro(filtro = "todos") {
    if (filtro === "todos") return this.projetos;
    return this.projetos.filter((projeto) => projeto.status === filtro);
  }
}