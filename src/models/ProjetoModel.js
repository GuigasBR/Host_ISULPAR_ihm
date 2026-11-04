/**
 * MODEL: Gere os dados e o estado dos projetos das disciplinas.
 * Para adicionar o projeto de um grupo, altere 'status' para "publicado"
 * e insira o link final no campo 'url'.
 */
export class ProjetoModel {
  constructor() {
    this.projetos = [
      {
        id: 1,
        nome: "Banco de Dados",
        equipe: "Espaço reservado para a equipe",
        status: "reservado", // Valores aceites: "publicado" | "reservado"
        url: null
      },
      {
        id: 2,
        nome: "Engenharia de Software",
        equipe: "Espaço reservado para a equipe",
        status: "reservado",
        url: null
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
        equipe: "Espaço reservado para a equipe",
        status: "reservado",
        url: null
      },
      {
        id: 6,
        nome: "Estrutura de Dados",
        equipe: "Espaço reservado para a equipe",
        status: "reservado",
        url: null
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
        equipe: "Projeto Base (Referência)",
        status: "publicado",
        url: "disciplinas/disciplina-9.html"
      }
    ];
  }

  // Retorna todos os projetos ou filtra por status ("publicado" / "reservado")
  listarPorFiltro(filtro = "todos") {
    if (filtro === "todos") return this.projetos;
    return this.projetos.filter((projeto) => projeto.status === filtro);
  }
}
