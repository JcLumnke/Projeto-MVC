module.exports = (app) => {
    let tasks = []; // Array para armazenar as tarefas em memória.

    // Endpoint para criar uma nova tarefa
    app.post('/tasks', (req, res) => {
        const task = req.body; // Recebe a nova tarefa do corpo da requisição.
        tasks.push(task); // Adiciona a nova tarefa ao array.
        res.status(201).send(task); // Responde com a tarefa criada e o status 201 (Created).
    });

    // Endpoint para obter todas as tarefas
    app.get('/tasks', (req, res) => {
        res.send(tasks); // Respnde com o array de tarefas.
    });

    // Endpoint para obter uma tarefa pelo ID
    app.get('/tasks/:id', (req, res) => {
        const taskId = parseInt(req.params.id); // Converte  o ID da tarefa para numero inteiro.
        const task = tasks.find(task => task.id === taskId); // Procura a tarefa pelo ID.
        if (task) {
            res.send(task); // Responde com a tarefa encontrada.
        } else {
            res.status(404).json({ error: "Tarefa não encontrada" }); // Responde com o erro 404 se a tarefa não for encontrada.
        }
    });

    // Endpoint para editar uma tarefa pelo ID
    app.put('/tasks/:id', (req, res) => {
        const taskId = parseInt(req.params.id);
        const { title, description, completed } = req.body;

        console.log('ID da tarefa a ser editada:', taskId); // Log para depuração

        const taskIndex = tasks.findIndex(task => task.id === taskId);
        if (taskIndex !== -1) {
            tasks[taskIndex] = { id: taskId, title, description, completed };
            res.send(tasks[taskIndex]);
        } else {
            res.status(404).json({ error: "Tarefa não encontrada" });
        }
    });

    // Endpoint para excluir uma tarefa pelo ID
    app.delete('/tasks/:id', (req, res) => {
        const taskId = parseInt(req.params.id); // Converte o ID da tarefa para um numero inteiro.

        console.log('ID da tarefa a ser excluída:', taskId); // Log para depuração

        const taskIndex = tasks.findIndex(task => task.id === taskId); // Procura o índice da tarefa no array.
        if (taskIndex !== -1) {
            tasks.splice(taskIndex, 1); // Remove a tarefa do array.
            res.json({ message: `Tarefa ${taskId} excluída com sucesso` }); // Responde com mensagem de sucesso.
        } else {
            res.status(404).json({ error: "Tarefa não encontrada" }); // Responde com mensagem de erro 404 se a tarefa não for encontrada.
        }
    });
};
