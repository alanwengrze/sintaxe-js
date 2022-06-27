//Funções são blocos de comando e instruções para a execução de determinadas tarefas

/* Sintaxe:

function nomeDaFuncao(){
    ${instrucao};
}
nomeDaFuncao();*/

function funcao(){
    console.log("Tudo certo fml");
}

funcao();

//os parenteses ('()') indicam que é um objeto do tipo function.
//as chaves/colchetes ({}) indicam que é um bloco de instrução, onde a gente passa a instrução a ser executada.

//Funções com parametros
//As funções podem receber em sua declaração, parametros, que servem como variaveis, onde sua atribuição pode ser feita durante a chamada da função
/*ex: function nomeDaFuncao(parametro){
    ${instrucao};
}
    nomeDaFuncao(valorDoParametro);*/

function mensagem(primeiro, segundo){
    console.log(primeiro, segundo);
}
mensagem('tudo certo', 'familia');