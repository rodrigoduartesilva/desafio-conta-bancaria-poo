const ContaCorrente = require('./classes/ContaCorrente.js');

const contaCorrente = new ContaCorrente('0036', '005213', 100);

//console.log(contaCorrente);

//contaCorrente.depositar(50);
//contaCorrente.depositar(25);

//contaCorrente.sacar(10);

contaCorrente.extrato();