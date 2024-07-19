const Conta = require("./classes/Conta");

const conta = new Conta(1234, 445566, 'Corrente', 100);

console.log(conta);

conta.depositar(50);
conta.depositar(20);
conta.sacar(25);
conta.sacar(5);

conta.extrato();