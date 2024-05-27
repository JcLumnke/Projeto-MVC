const express = require('express'); // Importa o módulo para criar o servidor.
const path = require('path'); // Importa o módulo path para manipular caminhos de arquivos.
const bodyParser = require('body-parser'); // Importa o body-parser para analisar o corpo das requisições.

const app = express(); //Cria uma instância do express.
const PORT = process.env.PORT || 3000; // Usa / define a porta 3000 do servidor.

// Middleware para analisar o corpo das requisições JSON
app.use(bodyParser.json());

// Middleware para servir arquivos estáticos
app.use(express.static(path.join(__dirname, '../../public')));
app.use('/view', express.static(path.join(__dirname, '../view')));

// Endpoints de tarefas (usando controllers)
//Importa o controlador de tarefas
const taskController = require('../controller/task-controller');
taskController(app);

// Iniciar o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
