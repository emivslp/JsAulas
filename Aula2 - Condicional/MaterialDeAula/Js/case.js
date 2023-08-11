window.alert("Bem vindo a calculadora");
const numero1 = Number(window.prompt("Digite o seu primeiro número:"));
const operador = window.prompt("Digite a operação desejada");
const numero2 = Number(window.prompt("Digite o seu segundo número:"));

switch(operador){
    case "+":
        var resultado = numero1 + numero2;
        window.alert(`O resultado do calculo é de: ${resultado}`);
        location.reload();
        break
    case "somar":
        var resultado = numero1 + numero2;
        window.alert(`O resultado do calculo é de: ${resultado}`);
        location.reload();
        break
    case "-":
        var resultado = numero1 - numero2;
        window.alert(`O resultado do calculo é de: ${resultado}`);
        location.reload();
        break
    case "subtrair":
        var resultado = numero1 - numero2;
         window.alert(`O resultado do calculo é de: ${resultado}`);
        location.reload();
        break
    case "*":
        var resultado = numero1 * numero2;
        window.alert(`O resultado do calculo é de: ${resultado}`);
        location.reload();
        break
    case "multiplicar":
        var resultado = numero1 * numero2;
        window.alert(`O resultado do calculo é de: ${resultado}`);
        location.reload();
        break
    case "/":
        var resultado = numero1 / numero2;
        window.alert(`O resultado do calculo é de: ${resultado}`);
        location.reload();
        break
    case "dividir":
        var resultado = numero1 / numero2;
        window.alert(`O resultado do calculo é de: ${resultado}`);
        location.reload();
        break
    default:
        window.alert("O operador é inválido, tente novamente");
        location.reload();
        break
}
// var resultado = numero1 operador numero2

// window.alert(`O resultado do calculo é de: ${resultado}`);
// location.reload();