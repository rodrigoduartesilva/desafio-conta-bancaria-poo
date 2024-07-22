import PromptSync from 'prompt-sync';
const prompt = PromptSync();

import { realizarDeposito } from './realizarDeposito.js';
import { realizarSaque } from './realizarSaque.js';

export function selecionarTransacoes(opcaoTransacaoBancaria, conta) {
    let validarSaidaWhile = true;

    while (validarSaidaWhile) {
        switch (opcaoTransacaoBancaria) {
            case 1:

                realizarDeposito(conta);
                opcaoTransacaoBancaria = +prompt('Selecione uma das opções listadas no menu acima: ');
                break;

            case 2:

                realizarSaque(conta);
                opcaoTransacaoBancaria = +prompt('Selecione uma das opções listadas no menu acima: ');
                break;

            case 3:

                conta.extrato();
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
}