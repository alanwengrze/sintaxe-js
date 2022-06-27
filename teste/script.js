function teste(){
const inicio = Number(prompt("Digite um número para ser avaliado:"));

if(inicio < 0){
    alert("Número inválido, apenas números positivos!")
    teste();
}

function contar10() {
    let n=1;
    do {
        n++;
    console.log(n);
    } while (n<10);  
}
contar10();

}
teste();