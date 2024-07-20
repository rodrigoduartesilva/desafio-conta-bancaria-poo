const ContaCorrente = require('./classes/ContaCorrente.js');
const ContaPoupanca = require('./classes/ContaPoupança.js');

//const contaCorrente = new ContaCorrente('Samira Silva', '0036', '005213', 100);
const contaPoupanca = new ContaPoupanca('Samira Silva', '0036', '005213', 100);

//console.log(contaCorrente);

//contaCorrente.depositar(50);
//contaCorrente.depositar(25);

//contaCorrente.sacar(15);

//contaCorrente.extrato();

contaPoupanca.depositar(22.5);
contaPoupanca.sacar(0.5);

contaPoupanca.extrato();