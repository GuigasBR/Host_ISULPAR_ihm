
document.addEventListener("DOMContentLoaded", () => {

    // CONTEÚDOS

    const aulas = {
        ip: {
            titulo: "Configuração de endereços IP",
            paragrafos: [
                "O endereço IP identifica um dispositivo dentro de uma rede de computadores.",
                "IPv4 utiliza 32 bits e é representado por quatro números separados por pontos. Exemplo: 192.168.1.10.",
                "IPv6 utiliza 128 bits e foi desenvolvido para ampliar a quantidade de endereços disponíveis.",
                "A máscara de sub-rede determina qual parte do endereço identifica a rede e qual identifica o dispositivo.",
                "O gateway é o equipamento que permite a comunicação com outras redes."
            ]
        },

        roteadores: {
            titulo: "Configuração de roteadores",
            paragrafos: [
                "O roteador encaminha pacotes de dados entre diferentes redes.",
                "A tabela de roteamento contém informações sobre os caminhos utilizados para encaminhar os pacotes.",
                "O roteamento estático é configurado manualmente pelo administrador.",
                "O roteamento dinâmico utiliza protocolos para aprender e atualizar rotas automaticamente.",
                "RIP e OSPF são exemplos de protocolos de roteamento."
            ]
        },

        redes: {
            titulo: "Redes de computadores",
            paragrafos: [
                "Uma rede de computadores permite a comunicação e o compartilhamento de recursos entre dispositivos.",
                "A topologia representa a maneira como os equipamentos estão conectados.",
                "Na topologia estrela, os dispositivos são conectados a um equipamento central.",
                "Na topologia barramento, os dispositivos compartilham um mesmo meio de transmissão.",
                "TCP, UDP, HTTP e DNS são exemplos de protocolos utilizados na comunicação."
            ]
        }
    };

    const botoesAula = document.querySelectorAll("[data-aula]");
    const conteudoAula = document.getElementById("conteudo-aula");

    botoesAula.forEach(botao => {
        botao.addEventListener("click", () => {
            const aula = aulas[botao.dataset.aula];

            conteudoAula.innerHTML = `
                <h3>${aula.titulo}</h3>
                ${aula.paragrafos.map(texto => `<p>${texto}</p>`).join("")}
            `;

            document.getElementById("aulas").scrollIntoView({
                behavior: "smooth"
            });
        });
    });


    // FORMATAÇÃO AUTOMÁTICA DOS ENDEREÇOS IP (insere os pontos)
    ["ip", "gateway"].forEach(id => {
        const campo = document.getElementById(id);
        campo.addEventListener("input", () => {
            const numeros = campo.value.replace(/\D/g, "").slice(0, 12);
            campo.value = numeros.match(/.{1,3}/g)?.join(".") || "";
        });
    });

    // SIMULADOR DE IP
    document.getElementById("mascara").value = "255.255.255.0";

    const verificarBotao = document.getElementById("verificar-ip");
    const resultadoIP = document.getElementById("resultado-ip");

    function validarIP(ip) {
        const partes = ip.split(".");

        if (partes.length !== 4) return false;

        return partes.every(parte =>
            /^\d+$/.test(parte) &&
            Number(parte) >= 0 &&
            Number(parte) <= 255
        );
    }

    function ipParaNumero(ip) {
        return ip.split(".").reduce(
            (total, parte) => total * 256 + Number(parte),
            0
        );
    }

    function mascaraValida(mascara) {
        if (!validarIP(mascara)) return false;

        const numero = ipParaNumero(mascara);
        const invertida = (~numero) >>> 0;

        return (invertida & (invertida + 1)) === 0;
    }

    verificarBotao.addEventListener("click", () => {
        const ip = document.getElementById("ip").value.trim();
        const mascara = document.getElementById("mascara").value.trim();
        const gateway = document.getElementById("gateway").value.trim();

        resultadoIP.className = "result";

        if (!validarIP(ip) || !validarIP(gateway)) {
            resultadoIP.classList.add("error");
            resultadoIP.textContent =
                "Digite um endereço IP e gateway válidos.";
            return;
        }

        if (!mascaraValida(mascara)) {
            resultadoIP.classList.add("error");
            resultadoIP.textContent =
                "A máscara de sub-rede não é válida.";
            return;
        }

        const ipNumero = ipParaNumero(ip);
        const gatewayNumero = ipParaNumero(gateway);
        const mascaraNumero = ipParaNumero(mascara);

        const redeIP = (ipNumero & mascaraNumero) >>> 0;
        const redeGateway = (gatewayNumero & mascaraNumero) >>> 0;

        if (redeIP !== redeGateway) {
            resultadoIP.classList.add("error");
            resultadoIP.textContent =
                "O IP e o gateway não pertencem à mesma sub-rede.";
            return;
        }

        const rede = [
            (redeIP >>> 24) & 255,
            (redeIP >>> 16) & 255,
            (redeIP >>> 8) & 255,
            redeIP & 255
        ].join(".");

        resultadoIP.classList.add("success");

        resultadoIP.innerHTML = `
            <strong>Configuração básica válida!</strong><br>
            Endereço IP: ${ip}<br>
            Máscara: ${mascara}<br>
            Gateway: ${gateway}<br>
            Endereço da rede: ${rede}
        `;
    });


});
