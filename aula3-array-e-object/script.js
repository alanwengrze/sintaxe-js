//o que são arrays(vetores)

//declarando array
let array = ['string', 1, true];
console.log(array);

//Podemos declarar mais de um tipo de variável  no mesmo array, até mesmo acrescentar um array dentro do outro
let array1 = ['string',1 , true, ['array2'], ['array3'], ['array4'], ['array5'], ['array6'], ['array7']];
console.log(array1);

//Manipulando uma array. Ao usar uma array, temos vários métodos que podem ser usados para manipular ela

//forEach(). Ele faz uma repetição para cada item/índice de uma array
array.forEach(function(item, index){console.log(item, index)});
//Aqui ele mostra o item (valor do índice), e o index(índice) para cada índice da array.

//push() adiciona um novo item no final da array.
array.push('novo item');
console.log(array);

//pop() remove um item no final da array.
array.pop();
console.log(array);

//shift() remove um item no início da array.
array.shift();
console.log(array);

//unshift() adiciona um item no início da array.
array.unshift('novo item');
console.log(array);

//indexOf() retorna um índice de uma array. Podemos pedir para ela mostrar o índice de algum valor
//console.log(array.indexOf(true));

//splice() remove ou substitui um valor pelo índice
array.splice(0,2);
console.log(array);

//slice() retorna uma parte de um array já existente
let novoArray = array1.slice(2, 6);
console.log(novoArray);


//Objeto são dados que possuem propriedades e valores que definem suas características. Deve ser declarado entre chaves "{}".
//Ex: Imagina uma xícara azul. Ela tem cor, pode ter tamanhos diferentes e funções. Declaramos assim:
/*var xicara = {
    cor:'azul',
    tamanho:'p',
    funcao:tomarCafe()
};*/

//Manipulando Objetos: As propriedades de objetos podem ser atribuidas a variáveis, facilitando a manipulação do objeto. Chamamos isso de desestruturação.

/*Ex: var xicara = {cor:'azul', tamanho:'p', funcao:tomarCafe()}

    var cor = xicara.cor;
    var tamanho = xicara.tamanho;
    var funcao = tomarCafe();*/

let object = { String: 'String', number: 1, boolean: true, array: ['array'], objectInterno: {objectInterno:'objectInterno'}};
console.log(object);

//Para acessar apenas uma propriedade do objeto, usamos um ponto(.) e o nome da propriedade.
console.log(object.number);

//Desestruturação de objetos:
var String = object.String;
console.log(String);

var arrayInterno = object.array;
console.log(arrayInterno);

//outra forma de desestruturação de objetos:
var {String, number, boolean, objectInterno} = object;
console.log(String, number, boolean, objectInterno);