import PromptSync from 'prompt-sync';
const prompt = PromptSync();

export function realizarSaque(conta) {
    let valor;

    valor = +prompt('Informe o valor do saque que deseja efetuar: R$ ');
    conta.sacar(valor);

    console.log('\n');
    console.log('Saque efetuado com sucesso!');
}