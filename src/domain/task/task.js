// Construtor da classe Task.
class Task {
    constructor(id, title, description, completed) {
        this.id = id; // ID da tarefa.
        this.title = title; // Titulo da tarefa.
        this.description = description; // Descrição da tarefa.
        this.completed = completed; // Status de conclusão da tarefa.
    }
}

module.exports = Task; // Exporta a classe Task.
