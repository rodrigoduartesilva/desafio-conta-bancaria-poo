import PromptSync from 'prompt-sync';
const prompt = PromptSync();

// Funcao que que possibilita o cliente realizar um deposito atraves da chamada do metodo .depositar herdado da classe Conta por suas filhas, ContaCorrente e ContaPoupanca
export function realizarDeposito(conta) {
    let valor;

    valor = +prompt('Informe o valor do depósito que deseja efetuar: R$ ');
    conta.depositar(valor);

    console.log('\n');
    console.log('Depósito efetuado com sucesso!');
}