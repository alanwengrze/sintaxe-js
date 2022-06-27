//tipos primitivos 

//booleanos (verdadeiro ou falso)
var vOuF = false;

//o comando console.log() serve para mostrar algo na tela.
//typeof() mostra o tipo da variável
console.log(typeof(vOuF));

//number (numérica)
var numero = 1;
console.log(typeof (numero));

//string (caracteres)
var nome = "Alan";
console.log(typeof(nome));

//formas de declarar variáveis 

//var é uma variável de escopo global, pode ter o seu valor alterado e se nenhum valor inicial for atribuido a ela, será tratado como null
var variavel = 1;
variavel = 2; //aqui eu mudei o valor da variável
console.log(variavel);

//let é uma variável de escopo local em bloco, pode ter o seu valor alterado e se nenhum valor inicial for atribuido a ela, será tratado como null
let variavel2 = 'alan';
variavel2 = 'wengrze';
console.log(variavel2);

//const é uma variável de escopo local em bloco, de valor constante, ou seja, o valor não muda. É obrigatório declarar um valor ao inicia-lá.
const variavel3 = '5';
console.log(variavel3);

//Diferenças entre escopo global e local:

//A global é a variável geral do código, que vai ser mostrada
var escopoGlobal = 'global';
console.log(escopoGlobal);

//A variável local não é mostrada, é usada em funções, ela só é mostrada quando nós chamamos a função. Como no exemplo abaixo:
function escopoLocal(){
    let escopoLocalInterno = 'local';
    console.log(escopoLocalInterno);
}
escopoLocal();

//Sempre declarar as variáveis no inicio do escopo, como nos exemplos acima.

//Sinais em JavaScript
//var atribuicao = 'alan'; (atribuição)
//var comparacao = 0 == "0"; (comparação)
//var identico = 0 === "0"; (identico) Aqui, tanto o valor, quanto o tipo da variável devem ser iguais para retornar true

//Operadores aritméticos
//adição (+), subtração(-), multiplicação(*), divisão(/), divisão inteira (resto da divisão) (%), potenciação(**);

//Operadores relacionais
// maior que (>), menor que (<), maior ou igual a (>=), menor ou igual a (<=)

//Operadores Lógicos
// E (&&) todos os valores devem ser verdadeiros, OU () um valor precisa ser verdadeiro, NÃO(!) inverte o valor
var ou = true || false;