// var cliente1nome = "Alice";
// var cliente1CPF = 6666666;
// var cliente1RG = 5555555;
// var cliente1Agencia = 101;
// var clinete1Conta = 1080;
// console.log(cliente1nome+ "," +cliente1CPF);

// // ou
// var clinete1Conta = ["Nome : Alice","CPF: 6666"];
// console.log(clinete1Conta);

// // nao vale a pena fazer isso pq da mto trabalho e pouca flexibilidade com relacao a mostrar os dados necessarios e nao mostrar alguns outros dados

// CRIANDO OBJETO
// um objeto pode ser associado a um molde dentro do Js. Por exemplo, toda vez que eu criar um cliente, ele ja vai vir com essas informações. 
// eu quero criar um objeto cliente (um molde cliente):
class Cliente {
    nome;    
    cpf;   
}

class Conta{
    numeroConta;
    agencia;
    saldo;
    sacar(valor){
        if(this.saldo >= valor){
            this.saldo = this.saldo - valor;
            return valor;
        } else{
            return;
        }
        // this é pra mostrar que é desse objeto específico. seleciona a conta atual = "este saldo".
    };
    depositar(valor){
        if(valor >0){
            // this.saldo = this.saldo + valor (mesma coisa de):
            this.saldo += valor;
            return valor;
        } else{
            return;
        }
    };
}
// dentro desse objeto tem os atributos. As informaçõe sao atributos do objeto. E as funções também podem ser atribuidas os ojetos. 
var cliente1 = new Cliente ();
// "olha variavel, voce vai receber um novo cliente, seja qual for ele". Todo molde que a gente cria é melhor começar com maiusculo. 
cliente1.nome = "Alice"
// cliente1.agencia = 101;
cliente1.cpf = 999999;
// cliente1.conta = 1080; 

// "olha, eu criei esse cliente 1 e esse cliente1 tem essas informações"
// para criar outro cliente, é so colocar as novas informações, nao precisa criar mais o molde:

var cliente2 = new Cliente ();
cliente2.nome = "Victor"
// cliente2.agencia = 102;
cliente2.cpf = 999989;
// cliente2.conta = 1081; 

var contaAlice = new Conta();
contaAlice.numeroConta = 1080;
contaAlice.agencia = 101;
contaAlice.saldo =0;

console.log(cliente1);
console.log(contaAlice);
console.log(cliente2);


// CONTROLANDO OBJETO - SAQUE
contaAlice.saldo = 3000;
console.log(contaAlice);
contaAlice.sacar(1000);
console.log(contaAlice.saldo);
contaAlice.sacar(10000);
var valorSacado = contaAlice.sacar(50);
console.log(contaAlice.saldo);

// CONTROLANDO OBJETO - DEPOSITO
// contaAlice.saldo = -1000;
contaAlice.depositar(5000);
console.log(contaAlice.saldo);
contaAlice.depositar(-1000);
console.log(contaAlice.saldo);