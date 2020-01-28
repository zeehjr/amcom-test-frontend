Este projeto está sendo elaborado para a AMcom.

Ele consiste em um jogo da memória, utilizando 10 pares de cartas.

## Rodando a aplicação

Após clonar o projeto, execute `yarn` para efetuar a instalação das dependências.

Após ter as dependências instaladas, execute `yarn start` e a aplicação iniciará na porta 3000.

## Rotas

A princípio, a única rota com conteúdo é a `/game`, que é a rota onde a parte "jogável" estará contida.

Teremos outras rotas, como a de Login, a de Registro e a de Leaderboard.

Em `/game` o jogo está sendo iniciado automaticamente, mas já está tudo pronto para que o jogo seja começado manualmente.

Elaborei um array para as rotas, que está em `src/routes`.

## Estrutura de pastas

Cada página contém sua própria pasta dentro de `src/pages`, contendo todos os seus components e assets.

O store do redux está em `src/store`. A princípio eu estava utilizando duck-pattern, mas devido à escolha de utilizar redux-saga, eu comecei a migrar cada reducer para sua pasta, em sua pasta contendo seus actions, types e o reducer.

## Estilos

Em resumo configurei o tailwindcss (que acabei nem utilizando ainda), e estou utilizando CSS Modules com SASS.