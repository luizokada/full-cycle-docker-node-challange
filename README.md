# Full Cycle Docker Node Challenge

Este projeto é um desafio do curso Full Cycle, focado em Docker, Node.js, MySQL e Nginx. O objetivo é criar uma aplicação Node.js que se comunica com um banco de dados MySQL, tudo orquestrado via Docker Compose, e exposto por um proxy reverso Nginx.

## Estrutura do Projeto

```
├── app/           # Código da aplicação Node.js
├── database/      # Scripts de inicialização do banco de dados
├── mysql/         # Dados persistentes do MySQL
├── nginx/         # Configuração do Nginx
├── docker-compose.yml
```

## Tecnologias Utilizadas
- Node.js
- MySQL
- Nginx
- Docker & Docker Compose

## Como Executar

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/luizokada/full-cycle-docker-node-challange.git
   cd full-cycle-docker-node-challange
   ```

2. **Suba os containers:**
   ```bash
   docker-compose up --build
   ```

3. **Acesse a aplicação:**
   Abra o navegador e acesse `http://localhost:8080`.

## Funcionalidades
- A aplicação Node.js conecta ao MySQL e realiza operações básicas.
- O Nginx atua como proxy reverso para a aplicação Node.js.
- O banco de dados é inicializado com o script `init.sql`.

## Estrutura dos principais arquivos
- `app/`: Código fonte da aplicação Node.js
- `database/init.sql`: Script de criação das tabelas e dados iniciais
- `nginx/nginx-node.conf`: Configuração do proxy reverso
- `docker-compose.yml`: Orquestração dos serviços

## Observações
- Certifique-se de que as portas 8080 (Nginx) e 3306 (MySQL) estejam livres.
- Os dados do MySQL são persistidos na pasta `mysql/`.

## Contato
Dúvidas ou sugestões? Entre em contato com [luizokada](https://github.com/luizokada).

---
Desafio Full Cycle - Docker, Node.js, MySQL e Nginx.
