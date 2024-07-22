import PromptSync from 'prompt-sync';
const prompt = PromptSync();

import { criarConta } from './criarConta.js';

export function selecionarOpcoes(opcao) {
    switch (opcao) {
        case 1:

            criarConta(opcao);
            break;

        case 2:

            criarConta(opcao);
            break;

        default:
            console.log('Opção Inválida!');
            break;
    }
}