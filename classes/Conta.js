// Classe Conta, essa classe serve de modelo para as classes ContaCorrente e ContaPoupanca, onde estas herdarao seus atributos e metodos
export class Conta {
    constructor(titular, saldo) {
        this.titular = titular;
        this.agencia = Math.floor(1000 + Math.random() * 9000).toString();;
        this.numero = Math.floor(100000 + Math.random() * 900000).toString();
        this.saldo = saldo;
        this.saldoInicial = this.saldo;
        this.historicoDeDepositos = [];
        this.historicoDeSaques = [];
    }

    depositar(valor) {
        this.historicoDeDepositos.push(valor.toFixed(2));
        return this.saldo += valor;
    }

    sacar(valor) {
        this.historicoDeSaques.push(valor.toFixed(2))
        return this.saldo -= valor;
    }

    extrato() {

    }
}