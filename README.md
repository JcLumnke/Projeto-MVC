src
cmd
server.js: Arquivo principal do servidor.
controller
task-controller.js: Controlador que define os endpoints para operações CRUD.
domain
task
task.js: Modelo de dados para uma tarefa.
task-service.js: Serviço para manipulação de tarefas em memória.
view
Contém os arquivos HTML para o frontend.
public
Arquivos estáticos (JavaScript).
package.json
Definição do projeto e dependências.

Caminho para iniciar o servidor: node src/cmd/server.js
Para acessar a pagina inicial digite na URL o seguinte endereço:  http://localhost:3000
Navegue entre as opções de Formulário de tarefas / Lista de tarefas / Inicio.
Na pagina do formulario para criar um nova tarefa digite o Titulo da tarefa a ser criada a descrição, concluida 
se "sim" ou "não" e salvar. Gere quantas entradas quiser, você será sempre ao termino de cada registro levado a pagina
da Lista de tarefas use sempre o botão "Formulário de tarefas" para voltar e inserir uma nova tarefa no formulario de tarefas ou "Início".
Ao editar uma tarefa o sistema retorna ao "Formulário de tarefas" para realizar a edição clique em "Salvar" após a edição para salvar a nova entrada.
O registro estará na pagina "Lista de tarefas" com as devidas alterações feitas.
Para excluir uma tarefa é somente clicar em "Excluir".
