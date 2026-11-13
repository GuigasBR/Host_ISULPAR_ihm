export class ProjetoModel {
  constructor() {
    this.projetos = [
      {
        id: 1,
        nome: "Banco de Dados",
        equipe: "Espaço reservado para a equipe",
        status: "reservado",
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
      },
      {
        id: 10, // Mantenha o número do ID que você atribuiu ao card
        nome: "Redes de Computadores 2",
        equipe: "Miguel Colodel, Nykollas Armindo e Vitor Brunetto",
        status: "publicado",
        url: "disciplinas/redes-2/redes.html" // Ou "disciplinas/redes.html" se colocar direto na pasta disciplinas
      },
      {
        id: 11,
        nome: "Redes de Computadores 2",
        equipe: "Espaço reservado para a equipe",
        status: "reservado",
        url: null
      }
    ];
  }

  listarPorFiltro(filtro = "todos") {
    if (filtro === "todos") return this.projetos;
    return this.projetos.filter((projeto) => projeto.status === filtro);
  }
}