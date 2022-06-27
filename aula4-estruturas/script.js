var jogador1 = 1;
var jogador2 = 0;
var placar;

//estrutura condicional (if), (else), (else if). Funciona igual no php, mas com a sintaxe do JavaScript
//Aninhamento de if é colocar um if dentro do outro, como um ninho.


/*if(jogador1 && jogador2 > 0){
    console.log("Ambos marcaram pontos.");
}
else if(jogador1 > 0){
    console.log("jogador 1 marcou ponto");
}
else if(jogador2 > 0){
    console.log("jogador 2 marcou ponto");
}
else{
    console.log("Nenhum jogador marcou ponto");
}*/

//if ternário(condição ? instrução1 : instrução2)
jogador1 != -1 && jogador2 != -1 ? console.log("Os jogadores são válidos") : console.log("Os jogadores são inválidos");

if(jogador1 && jogador2 > 0){
    console.log("Ambos marcaram pontos.");
}
else if(jogador1 > 0 && jogador2 == 0){
    console.log("jogador 1 marcou ponto");
    placar = jogador1 > jogador2;
}
else if(jogador2 > 0 && jogador1 == 0){
    console.log("jogador 2 marcou ponto");
    placar = jogador2 > jogador1;
}
else{
    console.log("Nenhum jogador marcou ponto");
}

//Switch case
switch(placar){
    case placar = jogador1 > jogador2:
    console.log("O jogador 1 está na frente");
    break;

    case placar = jogador2 > jogador1:
        console.log("O jogador 2 está na frente");
        break;
    default:
        console.log("Empate");
        break;
}

//Estruturas de repetição

//for -> Repete uma instrução, até que a condição seja falsa

let array = ['valor1', 'valor2', 'valor3', 'valor4', 'valor5', 'valor6'];

let object = {propriedade1: 'valor1', propriedade2: 'valor2', propriedade3:'valor3'};

/*for(let indice = 0; indice < array.length; indice++){
//length significa o tamanho total da array. Nesse caso, 6, já que temos 6 valores.
console.log(indice);

}*/

//for/in -> Funciona como uma repetição a partir de uma propriedade/indice
for(let i in array){
    console.log(i);
}
//ele mostrou os indices da array em formato de String.

//for in com object
/*
for(i in object){
    console.log(i);
}*/
//ele percorre as propriedades do object e depois imprime elas.

//for/of -> funciona como uma repetição a partir de um valor.
/*for(i of array){
    console.log(i);
}*/
//ele mostrou os valores dentro da array

//for of com object não funciona, pois as propriedades dos objetos variam, já os índices de uma array não, já que sempre serão números inteiros.
//Porem, conseguimos usar, colocando a propriedade dentro da condição, mas ele imprime cada letra em uma linha, assim:
/*
for(i of object.propriedade1){
    console.log(i);
}*/

//while -> Executa uma instrução 'enquanto' determinada condição for verdadeira. A verificação é feita antes da execução.
var a = 0;

/*while (a < 10){
    a++;
    console.log(a);
}*/

//do while -> Executa uma instrução 'até que' determinada instrução seja falsa. A verificação é feita após a execução.
do {
    a++;
    console.log(a);
} while (a < 10);