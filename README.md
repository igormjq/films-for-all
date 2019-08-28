# Films For All - API
Implementação de exercício proposto de API com funcionalidades básicas para um sistema de locação de filmes.

## Requisitos
* Node.js
* npm ou yarn
* MySQL

## :rocket: Setup
Para utilizar a API em desenvolvimento, siga os procedimentos abaixo.

### 1. Instala todas as dependências do package.json  

```console
$ npm install
```

### 2. Variáveis de ambiente
Uma vez que dinâmicos para cada ambiente, as configurações, como palavra-chave para encriptação de tokens e credenciais do banco de dados são consumidas de um arquivo **.env**. Recomenda-se seguir este padrão. Para isso:

1. Copiar o arquivo **.env.example** na raíz e nomeá-lo **.env**, ainda na raíz. 
2. Inserir os valores no **.env** conforme setup disponível

Se preferir inserir manualmente, as configurações do banco de dados estão disponíveis em `config/config.js`

### 3. Inicialização do banco de dados  
Rodar, respectivamente, os seguintes comandos no terminal 

```console
$ npm run db:create
```

```console
$ npm run db:setup
```

Se preferir manualmente, o _script_ de criação do banco de dados está disponível em `db/db.sql`

### 4. Inicializar a aplicação.

`$ npm start`

## :pencil: Documentação

A documentação está disponível no momento da inicialização do projeto sob o endpoint http://localhost:PORT/. 

## :zap: Scripts disponíveis
A fim de abstrair comandos de execução de tarefas constantes, dispõe-se de alguns _scripts_ no arquivo `package.json`

### Criação do banco de dados
```console
$ npm run db:create
```

### Exclusão do banco de dados
```console
$ npm run db:drop
```

### Rodar arquivos de migração do banco de dados
```console
$ npm run db:migrate
```

### Rodar arquivos de seed do banco de dados
```console
$ npm run db:seed
```

### Rodar todos os comandos acima, resetando o banco a seu estado inicial
```console
$ npm run db:setup
```

### Gerar documentação
```console
$ npm run docs:generate
```
