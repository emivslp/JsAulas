// OPERADORES LÓGICOS 
// > maior que 
// < menor que 
// >= maior ou igual que
// <= menor ou igual que
// != diferente
// = atribuição a alguma coisa 
// == igual a (comparação)

// ALTERNÁRIO
// && e
// || ou
// ! não

// IF
// if(condicao){
//     uma tarefa / um bloco de codigo
// } else {
//     uma tarefa / um bloco de codigo
// }

if(true){
    console.log("Você está no bloco do if verdadeiro")
} else {
    console.log("Você está no bloco do else falso")
}

if(false){
    console.log("Você está no bloco do if verdadeiro")
} else {
    console.log("Você está no bloco do else falso")
}

// MAIOR DE IDADE IF 
var idade = Number(window.prompt("Olá, qual é a sua idade?"));

if (idade <=0 || isNaN(idade)){
    window.alert("Idade Inválida");
    localtion.reload();
    // location.reload = pagina que se atualiza sozinha, caso a condição nao seja válida
} else{
    if(idade >= 1 & idade <= 17){
        window.alert("Acesso não permitido")
        location.reload();
    } else {
        window.alert("Você é maior de idade, seja bem vindo");
    }
}