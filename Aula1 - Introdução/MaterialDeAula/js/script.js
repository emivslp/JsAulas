console.log("ola mundo");
// log é pra imprimir coisas 
// ; é pra finalizar uma função 


// CAIXAS DE TEXTO
// window.alert("meu primeiro alert");
// referente ao escreva, em forma de alerta na pagina
// window.confirm("estou aprendendo js?");
// esse confirm é o valor borleano: true ou false
// window.prompt("qual é o seu nome?");
// para receber uma informacao, referente ao "leia" do portugol


// VARIÁVEIS
const numero = 10;
// Var de escopo global. const é uma variavel que é constante, ela nao pode ser subscrita, nao da pra mudar o elemento que a gente determinou. 
var numero2 = 2;
// Var de escopo global. é uma variavel comum, pode subscrever, qualquer pessoa pode acessar essa variavel.
let nome ="emilia santana"
// Var de escopo local. sobescreve. ele nao fica gravado na memoria ram, qnd o script acaba, ele nao esta mais salvo. nao fica salvo o valor, por exemplo em calculadora, só mostra e dps apaga o valor, nao precisa ficar salvo.
console.log(nome)

// CONCATENAÇÃO
// window.alert("seja bem vindo(a), "+nome)
// tem que colocar o + para linkar o que a gente quer que ele printe, que é o que a gnt determinou na variavel 
window.alert(`seja bem vindo(a), ${nome}`);
// dessa forma é outra forma que pode ser feito, foi uma atualização do js.