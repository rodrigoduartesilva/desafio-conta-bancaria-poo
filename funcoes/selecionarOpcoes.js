import PromptSync from 'prompt-sync';
const prompt = PromptSync();

import { imprimirMenu } from './imprimirMenu.js';
import { selecionarTransacoes } from './selecionarTransacoes.js';

import { ContaPoupanca } from '../classes/ContaPoupança.js';
import { ContaCorrente } from '../classes/ContaCorrente.js';

let opcaoTransacaoBancaria;

export function selecionarOpcoes(opcao) {
    switch (opcao) {
        case 1:
            console.log('Bem-vindo ao cadastro de Conta-Corrente do Banco Duarte Prime!');

            const titularConta = prompt('Digite seu nome completo: ');
            const primeiroDeposito = +prompt('Informe o valor do primeiro deposito de sua conta: R$ ');
            const contaCorrente = new ContaCorrente(titularConta, primeiroDeposito);

            imprimirMenu();

            opcaoTransacaoBancaria = +prompt('Selecione uma das opções listadas no menu acima: ');

            selecionarTransacoes(opcaoTransacaoBancaria, contaCorrente);

            break;

        case 2:
            console.log('Bem-vindo ao cadastro de Conta Poupança do Banco Duarte Prime!');

            const titularContaPoupanca = prompt('Digite seu nome completo: ');
            const primeiroDepositoPoupanca = +prompt('Informe o valor do primeiro deposito de sua conta poupança: R$ ');
            const contaPoupanca = new ContaPoupanca(titularContaPoupanca, primeiroDepositoPoupanca);

            imprimirMenu();

            opcaoTransacaoBancaria = +prompt('Selecione uma das opções listadas no menu acima: ');

            selecionarTransacoes(opcaoTransacaoBancaria, contaPoupanca);

            break;

        default:
            console.log('Opção Inválida!');
            break;
    }
}