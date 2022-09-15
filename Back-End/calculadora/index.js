const { sum, sub, mul, div } = require('./operações');
const readline = require('readline-sync');
console.log('Calculadora Simples');

const num1 = readline.questionInt('Digite um número: ');
const oper = readline.question('Digite a operação: (+, -, *, /)');
const num2 = readline.questionInt('Digite outro número: ');

switch(oper) {
    case "+":
        sum(num1, num2)
       break;
    case "-":
        sub(num1, num2)
    break;
    case "*":
        mul(num1, num2)
        break;
    case "/":
        div(num1, num2)
        break;
    default:
        console.log("A operação é desconhecida ou não foi implementada");
    }
