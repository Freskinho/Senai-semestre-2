// 1. Importando o módulo nativo HTTP do Node.js
const http = require('http');

// 2. Definir a porta do servidor
const PORTA = 3069;

// 3. Criando o servidor
const server = http.createServer((req, res) => {

    // Exibe no terminal a rota solicitada em tempo real
    console.log(`[PEDIDO RECEBIDO] Método: ${req.method} | Rota: ${req.url}`);

    // ROTA 1: Página inicial
    if (req.url === '/') {

        res.writeHead(200, {
            'Content-Type': 'text/html; charset=UTF-8'
        });

        res.end(`
            <h1 style="color: #dc2626; font-family: sans-serif;">
                Bem-vindo ao Site dos Eventos Nixados!
            </h1>

            <p style="font-family: sans-serif;">
                Seja feliz com os melhores eventos nixados!
            </p>

            <ul>
                <li>
                    <a href="/eventos">Eventos</a>
                    (API de Eventos em JSON)
                </li>

                <li>
                    <a href="/ingressos">Ingressos</a>
                    (API de Ingressos em JSON)
                </li>
            </ul>
        `);
    }

    // ROTA 2: API de Eventos
    else if (req.url === '/eventos') {

        res.writeHead(200, {
            'Content-Type': 'application/json; charset=UTF-8'
        });

        const eventos = [
            { id: 1, nome: 'Showzin do Tulio Criador', preco: 25.000 },
            { id: 2, nome: 'Orquestra de Undertale', preco: 30.000 },
            { id: 3, nome: 'Exposição de memes de IA', preco: 20.000 }
        ];

        res.end(JSON.stringify(eventos, null, 2));
    }

    // ROTA 3: API de Ingressos
    else if (req.url === '/ingressos') {

        res.writeHead(200, {
            'Content-Type': 'application/json; charset=UTF-8'
        });

        const ingressos = [
            { id: 101, nome: 'Primeira Classe', status: 'Very expensive' },
            { id: 102, nome: 'Última Classe', status: 'Not that expensive' }
        ];

        res.end(JSON.stringify(ingressos, null, 2));
    }

    // ROTA 404: Página não encontrada
    else {

        res.writeHead(404, {
            'Content-Type': 'text/html; charset=UTF-8'
        });

        res.end(`
            <h1 style="color: red; font-family: sans-serif;">
                ❌ Erro 404: Essa página não existe!
            </h1>
        `);
    }
});

// Ativar o servidor
server.listen(PORTA, () => {

    console.log('#----------------------------------#');
    console.log('# 🚀 Servidor rodando com sucesso! #');
    console.log(`# 🖥️ http://localhost:${PORTA} #`);
    console.log('#----------------------------------#');

});