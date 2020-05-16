# Início

Essa é a API que fornece os dados necessários para o Frontend, escrita em TypeScript com NestJS.

### SQLite

> Utilizar o .env
- syncronize: true
- migrations: false


## Migrations

Para criar uma `migration`, use o comando:
```shell
npm run add-migration NOME_DA_MIGRATION
```

E para executar todas as suas `migrations`, use:
```shell
npm run migration
```

## Autenticação

- Local

## Bugs

### helmet_1.default is not a function nestjs

Procure onde você está importando a biblioteca, troque de:

```diff
- import helmet from 'helmet'
+ import * as helmet from 'helmet'
```

### Erro 400 ao entrar na rota `localhost/api/swagger`

No meu navegador isso acontecia muito e abrir a aba anonima fazia voltar a funcionar. 
Isso ocorre também com o Ionic, Angular e outros.
