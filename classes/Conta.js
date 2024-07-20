class Conta {
    constructor(titular, agencia, numero, saldo) {
        this.titular = titular;
        this.agencia = agencia;
        this.numero = numero;
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

module.exports = Conta;