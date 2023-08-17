const empregado = document.getElementById("nome");
const filho = document.getElementById("quantidade");
const salario = document.getElementById("salario");
const btnCalcular = document.getElementById("botao");
const resultado = document.getElementById("resultado");
// toda vez que voce quer selecionar algo do html pra ca, tem que primeiro selecionar "trazendo" ele pra ca e dps botar ele pra fazer alguma coisa.
var familia = 0;

btnCalcular.addEventListener('click' , verificar );

function verificar (){
    // window.alert("oi") -- teste para ver se esta funcionando
    if(empregado.value === null || empregado.value === undefined || empregado.value === ""){
        window.alert("Por favor insira seu nome corretamente");
    } else{
        if ( filho.value === null || filho.value === undefined || filho.value === ""){
            window.alert("Por favor a quantidade de filhos corretamente");
        }
        else{
            if ( salario.value === null || salario.value === undefined || salario.value === "") {
                window.alert("Por favor insira seu salário de contribuição corretamente");
            } 
            // CALCULAR
            else{
                if (salario.value <= 806.80){
                   familia = filho.value * 41.37;
                }
                else{
                    if(salario.value >= 806.81 & salario.value <= 1212.64){
                        familia = filho.value * 29.16;
                    }
                    else{
                        familia = 0;
                    }
                }
                resultado.style.display = "block";
                resultado.innerText = `${empregado.value}, o salario família é de: R$ ${familia}`
            }
        }
    }  
}

