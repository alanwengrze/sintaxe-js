//Criando a função Calculadora
function calculadora(){
    //Uma constante que vai apresentar as opções disponíveis, convertando todos em números, e mostrando a mensagem com o prompt
    const operacao = Number(prompt("Escolha uma operação:\n 1 - soma (+)\n 2 - subtração (-)\n 3 - multiplicação (*)\n 4 - divisão (/)\n 5 - divisão inteira/resto (%)\n 6 - potenciação (**)"));

    //Teste para saber se a operação digitada é válida.
    if(!operacao ||operacao > 6){
        alert("Erro - Operação inválida");
        calculadora();
    }else{

    //Caso a operação acima seja válida, ele vai pedir os comandos de entrada e mostrar uma mensagem pelo prompt.
    //criamos as variáveis n1, n2 e resultado.
    let n1 = Number(prompt("Insira o primeiro valor:"));
    let n2 = Number(prompt("Insira o segundo valor:"));
    let resultado;

    //testando se as variáveis são válidas:
    if(!n1 || !n2) {
        alert("Erro - parâmetros inválidos!")
        calculadora();
    }else{

    //criando verificador de operações
    //aqui criamos a função correspondente para cada operação
        function soma(){
            resultado = n1 + n2;
            alert(`${n1} + ${n2} = ${resultado}`);
            //dentro do alert usamos crase (``)
            novaOperacao();
        }
        function subtracao(){
            resultado = n1 - n2;
            alert(`${n1} - ${n2} = ${resultado}`);
            novaOperacao();
        }
        function multiplicacao(){
            resultado = n1 * n2;
            alert(`${n1} * ${n2} = ${resultado}`);
            novaOperacao();
        }
        function divisao(){
            resultado = n1 / n2;
            alert(`${n1} / ${n2} = ${resultado}`);
            novaOperacao();
        }
        function resto(){
            resultado = n1 % n2;
            alert(`${n1} % ${n2} = ${resultado}`);
            novaOperacao();
        }
        function potenciacao(){
            resultado = n1 ** n2;
            alert(`${n1} ** ${n2} = ${resultado}`);
            novaOperacao();
        }

        //Essa função é para não ter que reiniciar a página sempre que usar uma operação. criamos uma função novaOperacao, que cria uma variavel opcao. Depois um estrutura de condição para cada opção.
        function novaOperacao(){
            let opcao = prompt("Deseja fazer outra operação?\n 1 - Sim\n 2 - Não");

            if(opcao == 1){
                calculadora();
            }else if(opcao == 2){
                alert("Até mais!");
            }else{
                alert("Digite uma opção válida");
                novaOperacao();
            }
        }
    }
        //Aqui chamamos a função correspondente que o usuário escolheu
        /*if(operacao == 1){
            soma();
        } else if(operacao == 2){
            subtracao();
        } else if(operacao == 3){
            multiplicacao();
        } else if(operacao == 4){
            divisao();
        } else if(operacao == 5){
            resto();
        } else if(operacao == 6){
            potenciacao();
        }*/

        //Fazendo as chamadas de cada operação com switch case
        switch(operacao){
            case 1:
                soma();
                break;
            case 2:
                subtracao();
                break;
            case 3:
                multiplicacao();
                break;
            case 4:
                divisao();
                break;
            case 5:
                resto();
                break;
            case 6:
                potenciacao();
                break;
            
        }
    }
}

//Chamando a calculadora
calculadora();