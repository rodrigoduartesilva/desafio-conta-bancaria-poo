import { Conta } from "../classes/Conta.js";

// Classe ContaPoupanca que possibilita a criacao de uma conta poupanca pelo usuario
export class ContaPoupanca extends Conta {
    constructor(titular, saldo) {
        super(titular, saldo);
        this.redimentosContaPoupanca = 0.15;
        this.calcularRendimentos = this.redimentosContaPoupanca * this.saldo;
        this.aplicaRendimentos();
    }

    // Metodo que aplica rendimentos a conta poupanca
    aplicaRendimentos() {
        return this.saldo += this.calcularRendimentos;
    }

    extrato() {
        console.log('************** Extrato Conta Poupança **************');
        console.log('\n');
        console.log(`Cliente: ${this.titular}`);
        console.log('\n');
        console.log(`Saldo Inicial: R$ ` + this.saldoInicial.toFixed(2));
        console.log('\n');
        console.log(`Percentual de Redimentos aplicado: ${this.redimentosContaPoupanca * 100}%`);
        console.log('\n');
        console.log(`Valor recebido de Rendimentos: R$ ${this.calcularRendimentos.toFixed(2)}`);
        console.log('\n');

        console.log('** Depositos **');
        console.log('\n');
        if (!this.historicoDeDepositos.length) {
            console.log('Sem movimentação no período!');
        } else {
            this.historicoDeDepositos.forEach((valor, indice) => {
                console.log(`${indice + 1}º deposito: R$ ${valor}`);
            });
        }

        console.log('\n');
        console.log('** Saques **');
        console.log('\n');
        if (!this.historicoDeSaques.length) {
            console.log('Sem movimentação no período!');
        } else {
            this.historicoDeSaques.forEach((valor, indice) => {
                console.log(`${indice + 1}º saque: R$ ${valor}`);
            });
        }

        console.log('\n');
        console.log(`Saldo Atual: R$ ${this.saldo.toFixed(2)}`);
        console.log('\n');
        console.log('****************************************************');
    }
}