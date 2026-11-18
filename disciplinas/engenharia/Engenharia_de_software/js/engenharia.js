
 // ==========================================
 // MENU DE CONTEÚDOS
 // ==========================================

const botaoConteudos = document.getElementById("botao-conteudos");
const listaConteudos = document.getElementById("lista-conteudos");

if (botaoConteudos && listaConteudos) {

    botaoConteudos.addEventListener("click", function () {

        const estaFechado = listaConteudos.hidden;

        listaConteudos.hidden = !estaFechado;

        botaoConteudos.setAttribute("aria-expanded", estaFechado);

        botaoConteudos.textContent = estaFechado
            ? "Conteúdos ▲"
            : "Conteúdos ▼";

    });

}


// ==========================================
// QUIZ DE ENGENHARIA DE SOFTWARE
// ==========================================

const areaQuiz = document.getElementById("area-quiz");

if (areaQuiz) {

    // Perguntas e alternativas
    const perguntas = [

        {
            pergunta: "O que os requisitos funcionais descrevem em um sistema?",
            alternativas: [
                "As funções e funcionalidades que o sistema deve oferecer",
                "As características de desempenho e segurança",
                "Os custos e prazos do projeto",
                "A linguagem de programação utilizada"
            ],
            correta: [0]
        },

        {
            pergunta: "Na Engenharia de Requisitos, o que significa elicitação?",
            alternativas: [
                "A etapa de programação do sistema",
                "Descobrir e levantar as necessidades dos clientes e usuários",
                "A realização dos testes finais",
                "A manutenção do software"
            ],
            correta: [1]
        },

        {
            pergunta: "Qual característica define o modelo de desenvolvimento Cascata?",
            alternativas: [
                "As etapas são organizadas de forma linear e sequencial",
                "O desenvolvimento acontece sem planejamento",
                "As etapas são realizadas simultaneamente",
                "O projeto não possui etapas definidas"
            ],
            correta: [0]
        },

        {
            pergunta: "O que o diagrama de classes representa na UML?",
            alternativas: [
                "A sequência de atividades realizadas pelo usuário",
                "A estrutura do sistema com classes, atributos, operações e relacionamentos",
                "O cronograma de desenvolvimento do projeto",
                "A distribuição das tarefas da equipe"
            ],
            correta: [1]
        },

        {
            pergunta: "Como o Kanban permite acompanhar o andamento das atividades?",
            alternativas: [
                "Por meio de reuniões obrigatórias diárias",
                "Por meio de ciclos fixos chamados Sprints",
                "Por meio de etapas sequenciais que não podem ser alteradas",
                "Por meio de cartões organizados em colunas que representam etapas"
            ],
            correta: [3]
        },

        {
            pergunta: "Em um diagrama de casos de uso, o que representa um ator?",
            alternativas: [
                "Um papel desempenhado por uma pessoa ou sistema externo",
                "Uma classe com atributos e métodos",
                "Uma etapa do ciclo de vida do software",
                "Uma atividade interna de programação"
            ],
            correta: [0]
        },

        {
            pergunta: "UML é uma metodologia ou um processo de desenvolvimento de software.",
            alternativas: [
                "Verdadeiro",
                "Falso"
            ],
            correta: [1]
        },

        {
            pergunta: "No Scrum, o trabalho é organizado em ciclos chamados Sprints.",
            alternativas: [
                "Verdadeiro",
                "Falso"
            ],
            correta: [0]
        }

    ];


    // Controle do andamento do quiz
    let perguntaAtual = 0;
    let pontuacao = 0;


    // ==========================================
    // MOSTRAR PERGUNTA
    // ==========================================

    function mostrarPergunta() {

        const pergunta = perguntas[perguntaAtual];

        let alternativasHTML = "";

        pergunta.alternativas.forEach(function (alternativa, indice) {

            alternativasHTML += `
                <label class="alternativa-quiz">
                    <input
                        type="radio"
                        name="resposta"
                        value="${indice}"
                    >
                    <span>${alternativa}</span>
                </label>
            `;

        });

        areaQuiz.innerHTML = `

            <div class="quiz-progresso">
                <p>Questão ${perguntaAtual + 1} de ${perguntas.length}</p>
            </div>

            <div class="questao-quiz">

                <h3>${pergunta.pergunta}</h3>

                <div class="alternativas-quiz">
                    ${alternativasHTML}
                </div>

                <p id="mensagem-quiz"></p>

            </div>

        `;

        document.querySelectorAll('input[name="resposta"]')
            .forEach(function (item) {

                item.addEventListener("change", corrigirResposta);

            });

    }


    // ==========================================
    // CORRIGIR RESPOSTA
    // ==========================================

    function corrigirResposta() {

        const pergunta = perguntas[perguntaAtual];

        const selecionada = document.querySelector(
            'input[name="resposta"]:checked'
        );

        if (!selecionada) {
            return;
        }

        const respostaUsuario = Number(selecionada.value);

        const mensagem = document.getElementById("mensagem-quiz");

        const acertou = pergunta.correta.includes(respostaUsuario);

        if (acertou) {

            pontuacao++;

            mensagem.textContent = "Parabéns! Você acertou!";
            mensagem.style.color = "#267342";

        } else {

            mensagem.textContent = "Não foi dessa vez! Vamos para a próxima.";
            mensagem.style.color = "#b04444";

        }

        // Impede a troca da resposta
        document.querySelectorAll('input[name="resposta"]')
            .forEach(function (item) {

                item.disabled = true;

            });

        // Avança automaticamente após um segundo
        setTimeout(function () {

            proximaPergunta();

        }, 1000);

    }


    // ==========================================
    // PRÓXIMA PERGUNTA
    // ==========================================

    function proximaPergunta() {

        perguntaAtual++;

        if (perguntaAtual < perguntas.length) {

            mostrarPergunta();

        } else {

            mostrarResultado();

        }

    }


    // ==========================================
    // MOSTRAR RESULTADO FINAL
    // ==========================================

    function mostrarResultado() {

        const porcentagem = Math.round(
            (pontuacao / perguntas.length) * 100
        );

        areaQuiz.innerHTML = `

            <div class="resultado-quiz">

                <h3>Quiz concluído!</h3>

                <p>Você terminou o quiz de Engenharia de Software.</p>

                <h2>${pontuacao} de ${perguntas.length} questões corretas</h2>

                <p>Seu aproveitamento foi de ${porcentagem}%.</p>

                <button type="button" id="botao-reiniciar">
                    Refazer quiz
                </button>

            </div>

        `;

        document.getElementById("botao-reiniciar")
            .addEventListener("click", reiniciarQuiz);

    }


    // ==========================================
    // REINICIAR QUIZ
    // ==========================================

    function reiniciarQuiz() {

        perguntaAtual = 0;
        pontuacao = 0;

        mostrarPergunta();

    }


    // ==========================================
    // INICIAR QUIZ
    // ==========================================

    mostrarPergunta();

}
