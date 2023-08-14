// var fruta1 = "morango"
// var fruta2 = "mcabaxi"
// var fruta3 = "uva"

// ARRAY
// MEDOTO 1

var frutas = Array();
// criamos uma variável frutas e criamos um array (que é como se fosse um armário e os [ ] sao as gavetas desse armário)
frutas[0] = "morango";
frutas[1] = "abacaxi";
frutas[2] = "uva";
frutas[3] = "kiwi";


// METODO 2
var legumes = ["repolho","berinjela","alface","abóbora"];

console.log(frutas);
console.log(frutas[1]);

// COMANDOS DE ARRAY
// ADICIONAR ELEMENTOD NO FINAL DO ARRAY
frutas.push("pessego");
console.log(frutas);

// ADICIONAR ELEMENTOD NO COMEÇO DO ARRAY
frutas.unshift("pera");
console.log(frutas);

// REMOVER ELEMENTOS NO FIM DO ARRAY
frutas.pop();
console.log(frutas);

// REMOVER ELEMENTOS NO COMEÇO DO ARRAY
frutas.shift();
console.log(frutas);

// ADICIONAR ELEMENTOS NO MEIO DO ARRAY
// splice(indice, quantos indices sobrescreve, dados)
frutas.splice(1,0,"goiaba");
console.log(frutas);

// COPIAR UM ARRAY
var frutasNovas = frutas.slice();
// SOBRESCREVE UM ELEMENTO
frutas[2] = "banana";
console.log(frutas);