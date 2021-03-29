[![Build Status](https://travis-ci.com/magujun/ignite-nodejs-desafio4.svg?branch=main)](https://travis-ci.com/magujun/ignite-nodejs-desafio4)

# 💻 Rocketseat's Ignite - Trilha Node.js

## [Desafio 5](https://www.notion.so/Desafio-01-Database-Queries-8d97dae581d5446e97555c43d301ee45) 🚀

# 💻 Sobre o desafio

Nesse desafio, você realizará consultas no banco de dados com o TypeORM de três maneiras:

[ ] Usando o ORM
[ ] Usando Query Builder
[ ] Usando Raw Query

A aplicação possui dois módulos: `users` e `games`.

Um **usuário** pode ter vários jogos e um mesmo **jogo** pode estar associado a vários usuários.  

## Repositórios da aplicação

**src/modules/users/repositories/implementations/UsersRepository.ts**
**src/modules/games/repositories/implementations/GamesRepository.ts**. 

### UsersRepository

[ ] Método **findUserWithGamesById**
[ ] Método **findAllUsersOrderedByFirstName**
[ ] Método **findUserByFullName**

### GamesRepository

[ ] Método **findByTitleContaining**
[ ] Método **countAllGames**
[ ] Método **findUsersByGameId**

## Especificação dos testes

Para esse desafio, temos os seguintes testes:

[ ] **[UsersRepository] should be able to find user with games list by user's ID**

    Para que esse teste passe, você deve satisfazer o código de acordo com o que é [descrito aqui](https://www.notion.so/Desafio-01-Database-Queries-8d97dae581d5446e97555c43d301ee45).

[ ] **[UsersRepository] should be able to list users ordered by first name**

    Para que esse teste passe, você deve satisfazer o código de acordo com o que é [descrito aqui](https://www.notion.so/Desafio-01-Database-Queries-8d97dae581d5446e97555c43d301ee45).

[ ] **[UsersRepository] should be able to find user by full name**

    Para que esse teste passe, você deve satisfazer o código de acordo com o que é [descrito aqui.](https://www.notion.so/Desafio-01-Database-Queries-8d97dae581d5446e97555c43d301ee45)

[ ] **[GamesRepository] should be able find a game by entire or partial given title**

    Para que esse teste passe, você deve satisfazer o código de acordo com o que é [descrito aqui](https://www.notion.so/Desafio-01-Database-Queries-8d97dae581d5446e97555c43d301ee45)[.](https://www.notion.so/Desafio-01-Database-Queries-8d97dae581d5446e97555c43d301ee45)

[ ] **[GamesRepository] should be able to get the total count of games**

    Para que esse teste passe, você deve satisfazer o código de acordo com o que é [descrito aqui](https://www.notion.so/Desafio-01-Database-Queries-8d97dae581d5446e97555c43d301ee45).

[ ] **[GamesRepository] should be able to list users who have given game id**

