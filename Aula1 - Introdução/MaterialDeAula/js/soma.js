window.alert("seja bem vindo ao script de somar!");
let numero1 = parseInt(window.prompt("Digite o seu primeiro numero: "));
let numero2 =  parseInt(window.prompt("Digite o seu segundo numero: "));
// o intuito do negocio é a soma, nao guardar o numero que a pessoa escreveu, mas sim o resultado
// parse = converter int= inteiro. estamos dando o comando de converter o texto para um numero inteiro 
// outro jeito de converter pra numero é escrever "Number () " que da na mesma desse parseInt
const soma = numero1 + numero2;

// OPERADORES ARITMETICOS
//  + soma
//  - subtrair 
//  * multiplicar
//  / dividir 
//  ** potencia 
//  % resto da divisão 

window.alert(`A soma dos dois números é de ${soma}`);