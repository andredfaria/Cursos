<h1> TESTE MARVEL </h1>

## Como Executar

- Na pasta raiz rode composer update caso o vendor não exista
- Crie ou atualize o arquivo .env com as conexão que ira utilizar
- Execute o script que esta no caminho /script/database.sql
- Inicie o servidor com php artisan serve
## Objetivo do teste

O teste consistia em fazer com que algumas rotas seja chama em uma aplicação e que retorne alguns dados, usando uma API da marvel.

As rotas em questão.

- /v1/public/characters
- /v1/public/characters/{characterId}
- /v1/public/characters/{characterId}/comics
- /v1/public/characters/{characterId}/events
- /v1/public/characters/{characterId}/series
- /v1/public/characters/{characterId}/stories

## Percalços
Como não obtive sucesso em fazer com que minha apliação consumisse a API fiz eu mesmo a comunição interna, usando um banco de dados mysql e gerando consultas para retornar os dados, achei no Kaggle uma database de herois onde usei como base para as consulta baseado na API da marvel, claro que alguns dados não são o mesmo, sendo assim acabei dando uma "adptada", por exemplo a rota /v1/public/characters/{characterId}/series esta retornando o genero do personagem, pois não tinha o dados expesifico que a API da marvel retornava, outra consideração foi a que na rona /v1/public/characters/{characterId}/comics o retorno que tenho é muito extenso, e ficando asim complicado de exibir essa informação em tabela, por isso acabei dando um retorno simple na tela

## Considerações
Ao longo do desenvolvimento tive dificuldade com a questão da estrutura do laravel, achei meio complicado usar outras bibliotecas juntamente com o laravel, fiz alguns teste para usar o Doctrine e o slim, porem não obtive sucesso e acabei fazendo as requisições com o proprio laravel usando o Eloquent, Foi minha primeira vez trabalhando diretamente com laravel criando um projeto do zero usando o artisan, foi muito proveitoso esse projeto, em pouco tempo consegui apreder o basico para criar um controller, um model e uma view, e juntamente com o Eloquent consegui fazer essa aplicação, outro ponto que ajudou é que a documentação do laravel é bem completa e existe bastante conteudo na internet.
Acredito que compri com o objetivo proposto fazendo acesso as rotas necessarias