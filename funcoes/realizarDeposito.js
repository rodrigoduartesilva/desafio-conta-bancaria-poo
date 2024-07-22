import PromptSync from 'prompt-sync';
const prompt = PromptSync();

export function realizarDeposito(conta) {
    let valor;

    valor = +prompt('Informe o valor do depósito que deseja efetuar: R$ ');
    conta.depositar(valor);

    console.log('\n');
    console.log('Depósito efetuado com sucesso!');
}