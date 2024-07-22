# Desafio Unidade 3 - Bootcamp Introdução a Back-end development (iTalents)

## Enunciado

Nesta atividade, você será responsável por desenvolver uma aplicação simples de sistema bancário utilizando JavaScript com NodeJS. O objetivo é aplicar os conceitos de herança em objetos para criar uma estrutura de contas bancárias que incluam uma conta genérica, uma conta corrente e uma conta poupança.

### Implementação JavaScript:

1. Classe Base - Conta:
   <ul>
        <li>Crie uma classe Conta que deve conter os atributos básicos: titular, saldo</li>
        <li>Implemente métodos básicos como depositar(valor) e sacar(valor).</li>
   </ul>
2. Classe Derivada - Conta Corrente:
   <ul>
        <li>Crie uma classe ContaCorrente que herda da classe Conta.</li>
        <li>Adicione um atributo específico para taxa de juros: juros.</li>
        <li>Implemente um método para aplicar juros: aplicarJuros(), que aumenta o saldo com base na taxa de juros.</li>
   </ul>
3. Classe Derivada - Conta Poupança:
   <ul>
        <li>Crie uma classe ContaPoupanca que herda da classe Conta.</li>
        <li>Adicione um atributo específico para o rendimento: rendimento.</li>
        <li>Implemente um método para aplicar rendimento: aplicarRendimento(), que aumenta o saldo com base no rendimento.</li>
   </ul>

4. Interação com o Usuário:
   <ul>
        <li>Permita que o usuário crie uma conta, deposite, saque e veja o saldo de cada tipo de conta.</li>
   </ul>

## Instalando a aplicação em seu computador

Dentro do repositório você pode cloná-lo ou baixar o arquivo zip. Feito isso, execute direto o arquivo index.js.

## Clonando o repositório

1. Clone o repositório:

```bash
git clone https://github.com/rodrigoduartesilva/desafio-conta-bancaria-poo
```

2. Navegue até o diretório do projeto:

```bash
cd desafio-conta-bancaria-poo
```

3. Abra o VS Code ou use o comando abaixo:

```bash
code .
```

4. Instale a dependência prompt-sync para proporcionar ao usuário uma interação via teclado.

```bash
npm i prompt-sync
```

5. Execute a aplicação usando o comando:

```bash
node index.js
```

### Autor: Rodrigo Duarte

| [Linkedin](https://www.linkedin.com/in/rodrigoduar-te/) | [GitHub](https://github.com/rodrigoduartesilva/) | [Link do Repositório](https://github.com/rodrigoduartesilva/desafio-conta-bancaria-poo) |
