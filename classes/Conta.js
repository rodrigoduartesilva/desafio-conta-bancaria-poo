class Conta {
    constructor(agencia, numero, tipoConta, saldo) {
        this.agencia = agencia;
        this.numero = numero;
        this.tipoConta = tipoConta;
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
        console.log(`Saldo: R$ ` + this.saldoInicial.toFixed(2));
        console.log('Depositos');
        this.historicoDeDepositos.forEach((valor, indice) => {
            console.log(`${indice + 1}º deposito: R$ ${valor}`);
        });
        console.log('Saques');
        this.historicoDeSaques.forEach((valor, indice) => {
            console.log(`${indice + 1}º saque: R$ ${valor}`);
        })


        console.log(`Saldo Atual: ${this.saldo.toFixed(2)}`);
    }
}

module.exports = Conta;