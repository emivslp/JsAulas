var idade = Number(window.prompt("Ola, qual a sua idade?"));

if (idade >=0 && idade <15){
    window.alert("Criança")}
else{
    if (idade >=15 && idade <30){
        window.alert("Jovem")
    } else{
        if(idade >=30 && idade<60){
            window.alert("Adulto")
        }
        else{
            if(idade >=60){
                window.alert("Idoso")
            }
        }
    }
}
      

location.reload();
   
   



