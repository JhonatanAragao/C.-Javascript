// console.log ('Jhonatan')
// console.log ("bem vindo ao curso")
// let idade = 5;
// console.log(idade)
// let altura = 180
// console.log(altura)
// let valorIngressoAdulto = 20
// valorIngressoAdulto = 30
// console.log (valorIngressoAdulto);

//**TIPOS PRIMITIVOS:***

//**VALORES (String, number, boolean, underfined e null):
    //let nome = "Rafael"; //STRING literal  - qualquer caractere
    //let idade = 25; //NUMBER literal - qualuqer valor de número
   // let estaaprovado = true; //BOOLEAN - define se está ou não / verdadeiro ou falso / ligado ou desligado;
   // let sobrenome = undefined; //UNDERFINED - variável sem valor definido
    //let corSelecionada = null; //NULL - Redefinir valor - usado em casos que voce queira resetar o sistema; 
    // Exemplo do Null: Ao chegar no site tem um campo para selecionar a cor e o usuário escolhe a cor azul
    // quando outra pessoa entrar no site, o valor da variável retorna para null permitindo que o novo usuário possa fazer também sua escolha;

//**REFERENCIA (Objetos, Arrays e funções):

//**OBJETO */

    // let nome = "Rafael";
    // let idade = 25;
    // let estaaprovado = true; 
    // let sobrenome = undefined; 
    // let corSelecionada = null;

    //AO CHAMAR UMA VARIÁVEL RECEBENDO OUTRAS VARIÁVEIS, TEMOS A FORMAÇÃO  DE UM OBJETO

    // let pessoa = {
    //     nome: "Rafael",
    //     idade: 25,
    //     estaaprovado: true,
    //     sobrenome: "de sousa"
    // };
    // console.log(pessoa);

//ARRAY */

// let familia = [26,45,"jhonatan",50,2];
// console.log(familia.length);
// console.log(familia[2]);;
//ex:
// let nomeDoColega = ["Jhonatan", 22, "Teresina", "Masculino"]; //nome idade e cidade
// console.log(nomeDoColega.length);
// console.log(nomeDoColega);

//FUNÇÃO */

// Nomear função: verbo + substantivo

//EX 1:
// let corSite = "Azul";
// function resetaCor (){
//      corSite = "";
// };

// console.log(corSite)
// resetaCor();
// console.log(corSite)

//EX 2: 

// let corSite = "Vermelho";
// console.log(corSite);

// function alterarCor (cor,tonalidad) {
//     corSite = cor + tonalidad + " " + "jhonatan";
// };

// alterarCor ("Verde"," Peixerman");
// console.log(corSite);
//***************/

//function dizerNome(){
  //  console.log('Jhonatan');
//}
//dizerNome(); //chamando a função dizerNome

//function multiplicarPorDois(valor){
  //  return valor*2;
//}
//console.log(multiplicarPorDois(6));

//let resultado = multiplicarPorDois(6);
//console.log(resultado);

//** INCREMENTO E DECREMENTO */
//let salario = 100; 
//console.log ( salario + salario);
//let idade = 20;
//console.log(idade++);
//console.log(--idade);
//idade *= idade;
//console.log(idade);

 



//**OPERADORES */

/**OPERADORES DE  COMPARAÇÃO*/
   //Igualdade estrita
//    console.log(1===1);
//    console.log('1'===1);

//    //igualdade solta 
// console.log(1==1);
// console.log('1'==1);

//**Operador Ternário */
     //**Imagina ai a seguinte situação: Se você tem um cliente que tem 100 pontos na sua loja
     //ele é um cliente comum. Se ele tem mais que isso, ele é um cliente premium!

     //let pontos = 100;
     //let tipo = pontos > 100 ? 'Premium' : 'Comum'; //esses operadores ajudam pois reduzem a necessidade do uso de vários IF's (if)
     //console.log(tipo);
     
//**Operadores lógicos */

//AND (e) (&&) retorna TRUE se os dois operandos forem verdadeiros
//ex: 
//console.log(true&&true);
//console.log(false&&true);

//Exemplo de uma pessoa que quer tirar a CNH mas deve ser maior de idade e ter CTPS

// let idade = 18;
// let seForMaiorDeIdade = idade >= 18 ? true : false;
// let maiorDeIdade = seForMaiorDeIdade;
// let possuiCarteiraDeTrabalho  = true;

//let podeAplicar = maiorDeIdade && possuiCarteiraDeTrabalho;
//console.log(podeAplicar); //Nesta condição, se a pessoa  ter igual ou mais que 18 anos, ela estará
//apta! Porém deve também possuir carteira de tranalho para dar procedência, caso contrário, o resultado
// será falso!


//OU (||)

// let idade = 17;
//  let seForMaiorDeIdade = idade >= 18 ? true : false;
//  let maiorDeIdade = seForMaiorDeIdade;
//  let possuiCarteiraDeTrabalho  = false;

// let podeAplicar = maiorDeIdade || possuiCarteiraDeTrabalho;
// console.log('Pode aplicar:', podeAplicar);

// //NOT (!)

// let candidatoRecusado = !podeAplicar;
// console.log('Candidato recusado:',candidatoRecusado);



//**Comparando números não booleanos */

//Falsy:
//underfined; null; 0; false; ''; NaN - not a number

//Truthy é quando o valor não se encontra em nenhum dos parâmetros citados no falsy

//EX:

// let corPersonalizada  = 'Azul';
// let corPadrao = undefined;
// let corResultado = corPersonalizada || corPadrao || 'Amarelo';
// console.log(corResultado);
//O resultado foi a cor azul porque usando a comparação OUR, o js faz a leitura do primeiro parâmetro
//caso seja um truthy ele já ignora todo o resto e já nos mostra o valor do mesmo.


//**TROCANDO VALORES DE VARIÁVEIS */

// let a = 'lasanha';
// let b = 'carne de sol';

// let c  = a;
// a = b;
// b = c;

// console.log(a);
// console.log(b);

//CONDICIONAIS

//IF..ELSE

//if (condicao){
  // codigo a ser executado}

//else if(condicao) {
  //codigo a ser executado}

  //EXEMPLO: Se a hora estiver entre 6:00 até 12:00 : Bom dia!
  //  Se estiver entre 12:00 e 18:00 : Boa tarde!
  //Caso contrário : Boa noite!

// let hora = 19;
// if (hora > 6 && hora <= 12){
//   console.log('Bom dia!');
// }
// else if (hora > 12 && hora < 18){
//   console.log('Boa tarde!');
// }
// else {
//   console.log('Boa noite!');
// }


//SWITH..CASE

// let permissao; //comum, gerente, diretor
// permissao = '1'
// switch (permissao) {
//   case '1' :
//      console.log('Usuário Comum');
//   break;

//   case '3' :
//      console.log('Usuário Gerente');
//   break;

//   case '2' :
//      console.log('Usuário Diretor');
//   break;

//   default : console.log('Usuário não identificado!')
// }


//LAÇO DE REPETIÇÃO (LOOPS)

//1.FOR

//for (let i = 1; i <= 5; i++) {
 // console.log('Estou aprendendo',i);
//}

//2.WHILE
//3. DO..WHILE
//4. FOR..IN
//5. FOR..OF


//**EXERCICIO */
//**ESCREVA UMA FUNÇÃO QUE USA 2 NÚMEROS E RETORNA O MAIOR ENTRE ELES */

  // function maiorNumero (numero1,numero2){
  //   if (numero1 > numero2) return numero1; //ou {console.log(numero1)}
  //   else return numero2 //ou console.log(numero2)
  // } 
  // let max = maiorNumero(9.9999999,9.9999999999999);
  // console.log(max)

  //também podemos realizar este exercicio utilizando o aprendizado do operador ternário
  //que aprendemos anteriormente!

//  function numeroMaior (numero3,numero4){
//    return numero3 > numero4 ? numero3 : numero4;
//  } 
//  let max = numeroMaior(7,44);
//  console.log(max);




//**FIZZ BUZZ */
//Irá comparar alguns valores e retornar um valor baseado no valor de entrada.
//Divisível por 3 => Fizz
//Divisível por 5 => Buzz
//Divisível por 3 e 5 => FizzBuzz

const hoje =  fizzBuzz(9);
console.log(hoje);

function fizzBuzz(entrada){
  if (entrada % 3 ===0 && entrada % 5 ===0)
  return 'FizzBuzz';
  if ( typeof entrada !== 'number')
  return 'Não é um número';;
  if (entrada % 3 ===0)
  return 'Fizz';
  if (entrada % 5 ===0)
  return 'Buzz';
}



//PAREI EM 1:46
//https://youtu.be/i6Oi-YtXnAU
