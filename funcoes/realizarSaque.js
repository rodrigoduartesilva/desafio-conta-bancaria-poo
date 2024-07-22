import PromptSync from 'prompt-sync';
const prompt = PromptSync();

// Funcao que que possibilita o cliente realizar um saque atraves da chamada do metodo .sacar herdado da classe Conta por suas filhas, ContaCorrente e ContaPoupanca
export function realizarSaque(conta) {
    let valor;

    valor = +prompt('Informe o valor do saque que deseja efetuar: R$ ');
    conta.sacar(valor);

    console.log('\n');
    console.log('Saque efetuado com sucesso!');
}