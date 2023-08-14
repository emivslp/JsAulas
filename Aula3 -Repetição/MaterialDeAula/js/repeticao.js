// REPETICOES 
// WHILE
// verifica e dps faz
var contador1 = 0;
console.log("Inicio");

// enquanto ( condicao ) faca 
//     blocodecodigo
// fimEnquanto

while( contador1 <= 10 ) {
    console.log(contador1);
    contador1++
    // aplicacao do let: o let esta guarado até onde esta contando a repetição,, qnd acabar, nao vai ficar armazenado
    let teste = "let funciona";
    console.log(teste);
}
console.log(teste);
// contador1++ é pra ele repetir

// DO WHILE
// faz dps verifica 
var contador2 =11;
console.log("Inicio");
do{
    console.log(contador2);
    contador2++
}
while(contador2 <= 10);

// FOR
// uma forma mais sucinta de trabalhar com  repeticao 
// for (variavel; condicao; controle){
// 
// }
console.log("Inicio");
for(var contador3 = 10; contador >= 0; contador3--){
    console.log(contador3);
}

// FOR EACH
console.log("Inicio");
var exemplo = ["ex1","ex2","ex3","ex4","ex5"];
console.log(exemplo[0]);
exemplo.forEach((element) => {
    console.log(element)
});

// WHILE COM LENGTH
var exemplo2 = ["elemento1","elemento2","elemento3",];
var contador4 = 0;
while(contador4 <= exemplo2.length){
    console.log(exemplo2[contador4])
    contador4++ 
}
