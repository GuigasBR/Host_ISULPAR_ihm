# Portal de Projetos Acadêmicos — ISULPAR (Arquitetura MVC)

Portal centralizador para apresentação dos projetos e bases de conhecimento das disciplinas de Sistemas de Informação da faculdade ISULPAR.

## 📁 Estrutura de Pastas (Padrão MVC)

- `index.html`: View principal do portal na raiz para indexação direta no Google e GitHub Pages.
- `css/estilos.css`: Folha de estilos unificada (sem CSS inline).
- `src/models/ProjetoModel.js`: **(Model)** Contém a lista das 9 disciplinas, o estado (`publicado` ou `reservado`) e os links dos grupos.
- `src/views/ProjetoView.js`: **(View)** Responsável pela geração dinâmica dos cartões e atualização visual dos filtros.
- `src/controllers/ProjetoController.js`: **(Controller)** Liga o Model à View e gere os eventos de clique.
- `src/main.js`: Inicializador da aplicação.
- `disciplinas/disciplina-9.html`: Página completa da disciplina de Inteligência Artificial.
- `robots.txt` e `sitemap.xml`: Ficheiros de configuração para indexação no Google Search Console.

## 🚀 Como Executar Localmente

Como o projeto utiliza módulos nativos do JavaScript (`type="module"`), abra a pasta utilizando um servidor local (como a extensão **Live Server** do VS Code / Cursor ou `npx serve .`).

## 🔗 Como Adicionar o Link de um Grupo

Abra o ficheiro `src/models/ProjetoModel.js`, localize o `id` da disciplina correspondente e altere os campos `equipe`, `status` e `url`:

```javascript
{
  id: 1,
  nome: "Banco de Dados",
  equipe: "Nome dos Alunos do Grupo",
  status: "publicado",
  url: "https://link-do-grupo.github.io/"
}
```
