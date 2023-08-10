window.alert("script de divisão para facilitar o pagamento da conta da mesa.");

let valortotal = parseInt(window.prompt("Qual o valor total da conta? "));
let numero =  parseInt(window.prompt("A conta será dividida entre quantas pessoas? "));
let adicionais =  Number(window.prompt("A conta será dividida entre quantas pessoas? "));


const divisao = ((valortotal / numero) + adicionais).toFixed(2);
// .toFixed (2) é pra limitar o resultado a 2 decimais. isso tem que ser colocado no resultado, nao la na entrada de dados. 

window.alert(`Cada um deve pagar: R$ ${divisao},00`);