# Validador de CPF v.1.1.0

**Esta biblioteca se destina à validação de CPF, para uso em aplicações web.**
Na versão atual valida números de CPF a partir da fórmula definida pela Receita Federal, com validação pelo dígitos verificadores.

## Como instalar:

$  npm i validatecpf


## Como utilizar:

```node

> const cpf = require('validatecpf');
> console.log(cpf("08172315449"))
> // return true

```

## roadmap oficial do projeto

#### versão 1.0.0 (released)
- funcionalidades: validação de CPF;

#### versão 1.1.0
- funcionalidades: identificação de CPF com números repetitivos;
