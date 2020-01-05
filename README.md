# Films For All - API
Implementação de exercício proposto demandando a elaboração de uma API de funcionalidades básicas para um sistema de locação de filmes.

## Requisitos
* Node.js
* npm ou yarn
* MySQL

## :rocket: Setup
Para utilizar a API em desenvolvimento, siga um dos procedimentos abaixo.

### Docker :whale:
Para subir um __container__ da aplicação e de todas suas dependências, execute o comando

```console
$ docker-compose up -d
```

> Por padrão, o *container* da API utiliza a porta **3000** e o MySQL a porta **3306** do host. Assim, certifique-se que essas portas estão disponíveis em seu ambiente. Caso não queira utilizá-las, altere o mapeamento de portas no arquivo *docker-compose.yml*. **Não alterar as portas do container (após ':')**.

```yml
  app:
    ...
    ports:
     - {PORTA_DO_HOST}:3000
  database:
   ...
   ports:
    - {PORTA_DO_HOST}:3306
```

### Manualmente

#### 1. Instala todas as dependências do package.json  

```console
$ npm install
```

#### 2. Variáveis de ambiente
Uma vez que dinâmicas conforme cada ambiente, as configurações, como palavra-chave para encriptação de tokens e credenciais do banco de dados são consumidas de um arquivo **.env**. Recomenda-se seguir este padrão. Para isso:

1. Copiar o arquivo **.env.example** na raíz e nomeá-lo **.env**, ainda na raíz. 
2. Inserir os valores no **.env** conforme setup disponível

Se preferir inserir manualmente, as configurações do banco de dados estão disponíveis em `config/config.js`

#### 3. Inicialização do banco de dados  
Rodar, respectivamente, os seguintes comandos no terminal 

```console
$ npm run db:create
```

```console
$ npm run db:setup
```

Se preferir manualmente, o _script_ de criação do banco de dados está disponível em `db/db.sql`

#### 4. Inicializar a aplicação.

```console
$ npm start
```

## :pencil: Documentação

A documentação está disponível no browser no momento da inicialização do projeto sob o endpoint raíz `/`. Há também um arquivo `Postman.json`, com exemplos de requests, para importação no Postman.

## :zap: Scripts úteis

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
