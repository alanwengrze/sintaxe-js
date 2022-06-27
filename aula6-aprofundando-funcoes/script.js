//Tipos de funções

//Funções declarativas
//São funções que possuem o uso mais comum, deve ser declarada usando a palavra reservada "function" seguida do nome da função, parênteses "()" e chaves "{}". O nome da função é obrigatório.
/*ex: function nomeDafuncao(){
    ${instrucao};
}
nomeDafuncao();*/
function funcao(){
    console.log("Mensagem de uma função declarativa");
}
funcao();

//Expressões de funções
//São funções atribuidas a expressões. A nomeação das funções por expressão é opcional
/*ex1 -> var funcao = function nomeDaFuncao(){ 
    ${instrucao};
}
    nomeDaFuncao();

ex2 -> var funcao = function(){ 
    $(instrucao);
};*/

var funcao = function funcao(){
    console.log('Mensagem de uma expressão de função');
}
funcao();

var funcao1 = function(){
    console.log('Mensagem de uma expressão de função');
}
funcao1();

//Arrow Function
//São funções de expressão de sintaxe curta. Arrow functions sempre serão anônimas, e portanto não podem ser nomeadas. Deve ser declarada com parênteses '()', segundo de "=>" e depois chaves "{}"

/*ex 1: var funcao=() => {
    ${instrucao};
}*/
var funcao = () => {
    console.log('Sou uma arrow function');
}
funcao();

//Funções aritméticas
/*Number() - converte valores em números;
Prompt() - registra entradas de usuário;
Alert() - mostra mensagem ao usuário;
Template String - para usar strings junto com expressões;*/