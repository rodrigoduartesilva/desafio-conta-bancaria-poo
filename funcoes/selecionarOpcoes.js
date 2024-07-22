import PromptSync from 'prompt-sync';
const prompt = PromptSync();

import { criarConta } from './criarConta.js';

// Funcao de selecao de opçoes onde é chamada a funcao criarConta()
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