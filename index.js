import PromptSync from 'prompt-sync';
const prompt = PromptSync();

import { realizarDeposito } from './funcoes/realizarDeposito.js';
import { realizarSaque } from './funcoes/realizarSaque.js';

import { ContaCorrente } from './classes/ContaCorrente.js';
import { ContaPoupanca } from './classes/ContaPoupança.js';

let opcao;
let opcaoTransacaoBancaria;
let validarSaidaWhile = true;

console.log('*************************** Banco Duarte Prime ***************************');
console.log('\n');
console.log('Selecione uma das oções listadas abaixo e aproveite nossos serviços!');
console.log('\n');
opcao = +prompt('1 - Para criar uma conta corrente | 2 - Para criar uma conta poupança: ');

switch (opcao) {
    case 1:
        console.log('Bem-vindo ao cadastro de Conta-Corrente do Banco Duarte Prime!');

        const titularConta = prompt('Digite seu nome completo: ');
        const primeiroDeposito = +prompt('Informe o valor do primeiro deposito de sua conta: R$ ');
        const contaCorrente = new ContaCorrente(titularConta, primeiroDeposito);

        console.log('\n');
        console.log('1 - Deposito');
        console.log('2 - Saque');
        console.log('3 - Extrato');
        console.log('4 - Sair');

        opcaoTransacaoBancaria = +prompt('Selecione uma das opções listadas no menu acima: ');

        while (validarSaidaWhile) {
            switch (opcaoTransacaoBancaria) {
                case 1:

                    realizarDeposito(contaCorrente);
                    opcaoTransacaoBancaria = +prompt('Selecione uma das opções listadas no menu acima: ');
                    break;

                case 2:

                    realizarSaque(contaCorrente);
                    opcaoTransacaoBancaria = +prompt('Selecione uma das opções listadas no menu acima: ');
                    break;

                case 3:

                    contaCorrente.extrato();
                    opcaoTransacaoBancaria = +prompt('Selecione uma das opções listadas no menu acima: ');
                    break;

                case 4:

                    console.log('Aplicação finalizada!');
                    validarSaidaWhile = false;
                    break;

                default:

                    console.log('Opção inválida!');
                    opcaoTransacaoBancaria = +prompt('Selecione uma das opções listadas no menu acima: ');
                    break;

            }
        }

        break;

    case 2:
        console.log('Bem-vindo ao cadastro de Conta Poupança do Banco Duarte Prime!');

        const titularContaPoupanca = prompt('Digite seu nome completo: ');
        const primeiroDepositoPoupanca = +prompt('Informe o valor do primeiro deposito de sua conta poupança: R$ ');
        const contaPoupanca = new ContaPoupanca(titularContaPoupanca, primeiroDepositoPoupanca);

        console.log('\n');
        console.log('1 - Deposito');
        console.log('2 - Saque');
        console.log('3 - Extrato');
        console.log('4 - Sair');

        opcaoTransacaoBancaria = +prompt('Selecione uma das opções listadas no menu acima: ');

        while (validarSaidaWhile) {
            switch (opcaoTransacaoBancaria) {
                case 1:

                    realizarDeposito(contaPoupanca);
                    opcaoTransacaoBancaria = +prompt('Selecione uma das opções listadas no menu acima: ');
                    break;

                case 2:

                    realizarSaque(contaPoupanca);
                    opcaoTransacaoBancaria = +prompt('Selecione uma das opções listadas no menu acima: ');
                    break;

                case 3:

                    contaPoupanca.extrato();
                    opcaoTransacaoBancaria = +prompt('Selecione uma das opções listadas no menu acima: ');
                    break;

                case 4:

                    console.log('Aplicação finalizada!');
                    validarSaidaWhile = false;
                    break;

                default:

                    console.log('Opção inválida!');
                    opcaoTransacaoBancaria = +prompt('Selecione uma das opções listadas no menu acima: ');
                    break;

            }
        }

        break;

    default:
        console.log('Opção Inválida!');
        break;
}