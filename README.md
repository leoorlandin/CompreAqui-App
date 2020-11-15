<h1 align="center">:office: CompreAqui-App :sunny:</h1>

<div align="center">
  <h3>CompreAqui-App</h3>
  <p align="center">
    <a href="#sobre-information_source">Sobre</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    <a href="#funcionalidades-bulb">Funcionalidades</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    <a href="#tecnologias-computer">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    <a href="#iniciando-rocket">Iniciando</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  </p>
</div>

## Sobre :information_source:

Esse projeto contém uma interface Web juntamente de uma API, que têm como objetivo criar um App funcional de controle de estoque. 

## Funcionalidades :bulb:

- Recupera e exibe informações dos dados atuais salvos no banco de dados.
- Acesso rápido aos produtos cadastrados na página principal da aplicação.
- Campo de pesquisa para acessar facilmente os produtos desejados.
- Feedback visual para produtos com pouca quantidade em estoque
- Cadastro de novos produtos, alteração e exclusão dos produtos existentes.

## Tecnologias :computer:

- **ReactJS** - Biblioteca JavaScript para construção de interfaces de usuário.
- **Axios** - Biblioteca JavaScript utilizada para realizar e controlar requests HTTP.
- **Styled Components** - Biblioteca que permite usar estilos em nível de componente, aplicando a técnica CSS-in-JS.
- **Node.Js** - Platarforma de desenvolvimento open source para execução de JavaScript no server-side.
- **Express** - Framework para aplicações Web para Node.Js.
- **SQLite** - Banco de dados relacional da aplicação.
- **Knex** - Construtor de Querys para Postgres, MSSQL, MySQL, MariaDB, SQLite3, Oracle, and Amazon Redshift.

## Iniciando :rocket:

### Instalando dependências do Backend e executando Migrations

1. Na pasta Backend, execute `yarn` para instalar as dependências do projeto.
2. Execute `npx knex migrate:latest` para executar as migrations do banco de dados.
3. Execute `yarn start` para executar as migrations do banco de dados.

**Obs:** O gerenciador de pacotes, claro, fica por sua preferência :satisfied:

### Instalando dependências do Frontend e executando aplicação.

1. Na pasta Frontend, Execute `yarn` para instalar as dependências do projeto.
2. Execute `yarn start` para subir a aplicação.
3. O projeto será executado no link [http://localhost:3000](http://localhost:3000).