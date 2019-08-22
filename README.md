# Aplicando conceitos do NodeJS com Express 

Aplicação básica com NodeJS utilizando o Express. Desafio proposto pelo Bootcamp da Rocketseat.
Essa aplicação realiza o armazenamento de projetos e suas respectivas tarefas.

## Rotas

- `GET /projects`: Rota que lista todos projetos e suas tarefas;

- `POST /projects`: Rota que cria novos Projetos. A rota deve receber `id` e `title` dentro do corpo da requisição em formato JSON.

- `PUT /projects/:id`: A rota altera apenas o título do projeto com o `id` presente nos parâmetros da rota;

- `DELETE /projects/:id`: A rota deleta o projeto com o `id` presente nos parâmetros da rota;

- `POST /projects/:id/tasks`: A rota recebe um campo `title` no corpo da requisição e armazena uma nova tarefa no array de tarefas de um projeto específico escolhido através do `id` presente nos parâmetros da rota;
