const Task = require('./task'); // Importa o modelo de tarefa.

let tasks = []; // Array para armazenar as tarefas em memória.
let currentId = 1; // Variavel para gerar IDS incrementais para as tarefas.

class TaskService { // Cria uma nova tarefa.
    static createTask(data) {
        const task = new Task(currentId++, data.title, data.description, data.completed);
        tasks.push(task); // Adiciona a nova tarefa ao array.
        return task; // Retorna a tarefa criada.
    }

    static getAllTasks() { // Retorna todas as tarefa.
        return tasks; // Retorna o array de tarefas.
    }

    static getTaskById(id) { // Retorna uma tarefa pelo ID.
        return tasks.find(task => task.id === id);
    }

    static updateTask(id, data) { // Atualiza uma tarefa pelo ID.
        const taskIndex = tasks.findIndex(task => task.id === id);
        if (taskIndex !== -1) {
            tasks[taskIndex] = new Task(id, data.title, data.description, data.completed);
            return tasks[taskIndex]; // Retorna a tarefa atualizada.
        }
        return null; // Retorna null se a tarefa não for encontrada.
    }

    static deleteTask(id) { // Exclui uma tarefa pelo ID.
        const taskIndex = tasks.findIndex(task => task.id === id); // Procura o indice da tarefa no array.
        if (taskIndex !== -1) {
            tasks.splice(taskIndex, 1); // Rempve a tarefa do array.
            return true; // Retorna true se a tarefa foi excluida.
        }
        return false; // Retorna false se a tarefa não foi encontrada.
    }
}

module.exports = TaskService; // Exporta a classe taskServive.
