// Import da biblioteca do PromptSync, essa biblioteca possibilita a entrada de valores via teclado
import PromptSync from 'prompt-sync';
const prompt = PromptSync();

// Import da funções que imprime o menu e seleciona o tipo de transacao bancaria a ser realizada
import { imprimirMenu } from './imprimirMenu.js';
import { selecionarTransacoes } from './selecionarTransacoes.js';

// Import das classes
import { ContaPoupanca } from '../classes/ContaPoupança.js';
import { ContaCorrente } from '../classes/ContaCorrente.js';

// Funcao que cria uma conta de acordo com a opcao desejada pelo usuario
export function criarConta(opcao) {
    let opcaoTransacaoBancaria;
    let titularConta;

    // Opcao 1 cria uma conta-corrente
    if (opcao == 1) {

        console.log('Bem-vindo ao cadastro de Conta-Corrente do Banco Duarte Prime!');

        while (true) {

            try {

                titularConta = prompt('Digite seu nome completo: ');

                // Validacao do nome do titular conta onde é permitido apenas a insercao de letras
                if (!/^[A-Za-z\s]+$/.test(titularConta)) {
                    throw new Error('Nome inválido: O nome não pode conter números.');
                }

                break;

            } catch (error) {

                console.error(error.message);

            }

        }

        const primeiroDeposito = +prompt('Informe o valor do primeiro deposito de sua conta: R$ ');
        const contaCorrente = new ContaCorrente(titularConta, primeiroDeposito);

        imprimirMenu();

        opcaoTransacaoBancaria = +prompt('Selecione uma das opções listadas no menu acima: ');

        selecionarTransacoes(opcaoTransacaoBancaria, contaCorrente);

        //opcao 2 cria uma conta-poupança
    } else if (opcao == 2) {

        console.log('Bem-vindo ao cadastro de Conta-Poupança do Banco Duarte Prime!');

        while (true) {

            try {

                titularConta = prompt('Digite seu nome completo: ');

                if (!/^[A-Za-z\s]+$/.test(titularConta)) {
                    throw new Error('Nome inválido: O nome não pode conter números.');
                }

                break;

            } catch (error) {

                console.error(error.message);

            }

        }

        const primeiroDepositoPoupanca = +prompt('Informe o valor do primeiro deposito de sua conta poupança: R$ ');
        const contaPoupanca = new ContaPoupanca(titularConta, primeiroDepositoPoupanca);

        imprimirMenu();

        opcaoTransacaoBancaria = +prompt('Selecione uma das opções listadas no menu acima: ');

        selecionarTransacoes(opcaoTransacaoBancaria, contaPoupanca);

    } else {

        throw new Error('Opção inválida!');

    }
}