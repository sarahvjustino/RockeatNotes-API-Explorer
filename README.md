# Rocketnotes - Gerenciador de Anotações

Esta aplicação é uma ferramenta fullstack que permite aos usuários salvar e gerenciar anotações de forma rápida e eficiente. O backend é desenvolvido em Node.js com Express e utiliza o banco de dados SQLite para armazenar informações relacionadas a notas e usuários.

## Tecnologias Utilizadas

- Node.js
- Express
- SQLite
- Knex.js
- Bcryptjs
- JSON Web Token (JWT)

## Funcionalidades

O backend da Rocketnotes oferece várias funcionalidades essenciais para a operação do sistema:

1. **Autenticação**: Implementamos um sistema de autenticação seguro, que permite aos usuários criar uma conta, fazer login e atualizar seu perfil. Isso garante que apenas usuários autenticados possam acessar as notas salvas.

2. **Manipulação de Notas**: Os usuários autenticados podem criar, visualizar, atualizar e excluir suas notas. Cada nota pode conter um título, uma descrição e os links e tags relacionados.

## Configuração e Execução

Para executar o backend do Rocketnotes em seu ambiente de desenvolvimento, siga os seguintes passos:

1. Clone este repositório:

```bash
git clone https://github.com/sarahvjustino/RocketNotes-API-Explorer.git
```

Navegue até o diretório do projeto:

```bash
cd RocketNotes-API-Explorer

```

Instale as dependências usando npm:

```bash

npm install

```

### Configuração do Banco de Dados

Esta aplicação utiliza o SQLite como banco de dados. Execute o seguinte comando para criar as tabelas necessárias:

```bash
npm run migrate

```

### Iniciando o Servidor

Agora você está pronto para iniciar o servidor da API:

```bash
npm start

```

O servidor será executado em http://localhost:3333.
