class Carro{
    marca;
    modelo;
    ano;
    cor;
    velocidadeMaxima;
    velocidadeAtual;
    acelerar(valor){
        if(this.velocidadeAtual <= this.velocidadeMaxima){
            this.velocidadeAtual = this.velocidadeAtual + valor;
            return this.velocidadeAtual;
        } 
        
        if(this.velocidadeAtual > this.velocidadeMaxima){
            return this.velocidadeMaxima;
        } else {
            return this.velocidadeAtual;
        }
    }
}

var carro1 = new Carro();
carro1.marca = "ford";
carro1.modelo = "ka";
carro1.ano = 2015;
carro1.cor = "preto";
carro1.velocidadeMaxima = 280;
carro1.velocidadeAtual = 0;

console.log(carro1)
carro1.acelerar(300);
console.log(carro1)
    
