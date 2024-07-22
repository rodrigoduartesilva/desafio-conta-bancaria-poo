import { Conta } from "../classes/Conta.js";

// Classe ContaCorrente que possibilita a criacao de uma conta corrente pelo usuario
export class ContaCorrente extends Conta {
    constructor(titular, saldo) {
        super(titular, saldo);
        this.jurosContaCorrente = 0.1;
        this.calcularJuros = this.jurosContaCorrente * this.saldo;
        this.aplicaJuros();
    }

    // Metodo que aplica uma taxa de juros
    aplicaJuros() {
        return this.saldo += this.calcularJuros;
    }

    extrato() {
        console.log('************** Extrato Conta Corrente **************');
        console.log('\n');
        console.log(`Cliente: ${this.titular}`);
        console.log('\n');
        console.log(`Saldo Inicial: R$ ` + this.saldoInicial.toFixed(2));
        console.log('\n');
        console.log(`Percentual de Juros aplicado: ${this.jurosContaCorrente * 100}%`);
        console.log('\n');
        console.log(`Valor recebido de juros: R$ ${this.calcularJuros.toFixed(2)}`);
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