import { selecionarOpcoes } from './funcoes/selecionarOpcoes.js';

import PromptSync from 'prompt-sync';
const prompt = PromptSync();


let opcao;

console.log('*************************** Banco Duarte Prime ***************************');
console.log('\n');
console.log('Selecione uma das oções listadas abaixo e aproveite nossos serviços!');
console.log('\n');
opcao = +prompt('1 - Para criar uma conta corrente | 2 - Para criar uma conta poupança: ');

selecionarOpcoes(opcao);