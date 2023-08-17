class Computador{
    periféricos;
    gabinete;
    monitor;
    sistemaOperacional ;
    dono;
}

class Dono{
    constructor(nome , idade){
        this.nome = nome;
        this.idade = idade;
    }
    // nome;
}

var dono1 =new Dono("Victor", 20);
var dono2 =new Dono("Arthur", 16);
// dono1.nome = "Victor";

var meuComputador = new Computador();
meuComputador.periféricos = ["teclado reddragon","mouse gamer","mousepad"];
meuComputador.gabinete = "apple mac";
meuComputador.monitor = "27 polegadas","acer";
meuComputador.sistemaOperacional = "MAC OS";
meuComputador.dono = [dono1 , dono2];

console.log(meuComputador)
