var Nome = document.querySelector("#nome");
Nome.addEventListener('focusout' , validarNome);
function validarNome (){
    if (Nome.value != ""){
        window.alert("ok")
    }
    else{
        window.alert("Por favor insira seu nome corretamente")
    }
}

var Filhos = document.querySelector("#quantidade");
Filhos.addEventListener('focusout' , validarFilhos);
function validarFilhos (){
    if (Filhos.value != ""){
        window.alert("ok")
    }
    else{
        window.alert("Por favor insira a quantidade de filhos")
    }
}

var Salario = document.querySelector("#salario");
Nome.addEventListener('focusout' , validarSalario);
function validarSalario (){
    if (Salario.value != ""){
        window.alert("ok")
    }
    else{
        window.alert("Por favor insira seu salário de contribuição")
    }
}

var Resultado = document.querySelector("#resultado");
Resultado.addEventListener('focusout' , validarResultado);
function validarResultado(){
    
}

