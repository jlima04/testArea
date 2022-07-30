


console.log('Hello World');
console.log('hiii girrlll');
let Muname = 'jao'; //string literall
// cannot be a keyword
//has to be meaningful
//cannot start with a name
//cannot contain a space or hifen (-)
//case-senstivie >> Firstname/ firstName = varriavesi diferentes
// voce pode declarar variaveis na mesma linha let Firstname, Namefirst e 
//colocar a value na msms ex let FirstName = 'jao', Lastname = 'lima' ou o mais normal que é deixar tudo separado
// let Firstname = 'jao'
// let LastName = 'Lima'
console.log(Muname)
const idade = 20 //number literall
console.log(idade)
let isApproved = true; //bolean
let firstNae = undefined; //undefined pode ser declarado ou pode so nao colocar nd que da na mesma
let lastNae = null; //usado when u want to clear o valor da variavel
console.log(isApproved)
console.log(firstNae)
console.log(lastNae)

let person = {
    name :'jao',
    age : 20
};
// da para alterar a variavel usando o dot notation ou seja
person.name = 'Victor';
//bracket notation
person['name'] = 'Lima';
console.log(person.name)
//arrays [] array literal com o valor de nada
let listaDeCompras = ['pao', 'presunto', 'queijo']
let coresEscolhidas = ['vermelho', 'azul', 'preto', 'amarelo']; //vc pode adicionar elementos na array a qualquer momento
console.log(coresEscolhidas/*[index escolhido]*/);// so usar esse comendo aq em baixo selecionando o index do spot vazio e usando o mesmo index
coresEscolhidas[4] = 'roxo';// vc pode selecionar so um elemento da array mudando no log
console.log(listaDeCompras/*vc pode colocar um . e ver todas as propriedades das arrays* a unica importante é 
    length q mostra o tamanho da array*/ )
// function possui a key word depois o nome da função e depois () que é sua 'variavel' e entao {} que é o corpo ou onde 
// fica os comando dos codigo 
//essa função tem uma task que é colocar no console o conteudo    
function/*key word q define como função*/ 
    greet/* nome da função*/ (linda, incrivel)/*isso aqui é um paramentro(como uma caixa)*/
    {
    console.log('Alana é ' + linda + ' ' + incrivel);
}
greet('perfeita', 'demais');//esse aqui é o valor do parametro, o argumento como o conteudo da caixa
greet('linda demais', ',serio!');
//função que calcula 
function quadrado(number){
    return number * number
}
console.log(quadrado(22));

let soma = '5';
soma++;
console.log(soma);
const linda = 'perfeita' 
const incrivel = 'linda demais'


const alana = `alana é ${linda} e ${incrivel}`;

console.log(alana);

const novoObjeto = { // dentro de um object literal igual esse vc apartir daq coloca os valores com : para n dar conflito
    firstName :'Jonh', // ate pq vc so ta marcando as propriedades do seu object e nao criando outro
    lastName :'Doe',
    age : 20,
    hobbies : ['movies', 'comics', 'music'],// [] array literal ou seja marca como uma array
    address : {
        cidade: 'Natal',
        bairoo: 'Barro Vermelho',
        estado: 'RN',
    }
}
console.log(novoObjeto);

//array com objects precisa da virgula sempre que colocar uma propriedade difrente!!!!
const parafazer = [
{
    id: 1,
    text: 'Comprar pao' ,
    itsDone: true
}, 
{
    id: 2,
    text: 'Limpar Caixa',
    itsDone: true

},
 {
    id: 3,
    text: 'Comprar Feijao',
    itsDone: false

}
];
console.log(parafazer);

// para deixar tudo em formato JSON que é o formato usado para enviar para um server vc usa ou um formatador
// ou pode fazer tudo no proprio codigo assim:
const virarJSON = JSON.stringify(parafazer);
console.log(virarJSON)

//fazer projetos!!!!!!!!!!!! pra cimentar e ter experiencia de td

//loops

//For

for(let i = 0; i<=10; i++)
console.log(`For loop Number ${i}`);

//for loop de uma array o () de um loop são as especificações desse loop como valores/ limite/condições

//for (let parafazers of parafazer){
    

//high order array methods(functions) 
//forEach loops pela array
parafazer.forEach(function(parafazer) {
    console.log(parafazer.text);
});
//map (new array from an array

const todoText = parafazer.map(function(parafazer) {
    return parafazer.itsDone === true;
});
 console.log(todoText);
//filter (new array based on condition)

function girlHey(num){
    return num * 10;
}

let reposta= girlHey(25);
console.log(reposta);


function divisão (num){
    return num / 200;
}

let quociente = divisão (600);
console.log(quociente)

function aparece(){
    let vari = "toAqui";
    console.log("pizza",vari);
}



let hello = 'papapa';
console.log("piada",hello);

aparece(); // para a função rodar vc precisa colocar o nome da função denv igual ao q ta do lado e em cima.

/*Arithimectic operations is a combination of
 operators (+ - / * %)
 operands (values, variables...)
 % pega a divisão de 2 numeros ou variaveis e mostra se sobra algo ou não (divisivel por 2 ou n , par ou impar)
 */

 let portugal = 30;

 let italy = 20;

 italy = italy + 1;

 italy += 3;

 italy = italy - 2;

 italy -= 3;

 italy = italy * 2;

 italy *= 3;

 italy = italy / 2;

 italy /= 2;

 italy = portugal % 5;  /*resto de qq divisão % isso mostra precisa ser assim como se o valor da variavel fosse uma operação com outra variavel*/
 
 
console.log(italy);

/*type conversion*/

let x  = 12;
let y = "50"
let z  = true;

x = String(x);
console.log(x, typeof x);

y = Number(y);
console.log(y, typeof y);

z = String(z);
console.log(z, typeof z);

/*Constants are variables that cant be changed*/

const day = 2;



/*Math*/

//Math.floor arredonda sempre pra baixo//
//Math.round arredonda para o proximo //
//Math.ceil arredonda pra cima//
//Math.pow vc coloca primeiro uma base e dps uma elevação e mostra o resultado da elevação//
//Math.sqrt coloca a raiz quadrada//
//Math.abs mostra a distancia ate 0//
//Math.max / .min mostra o maximo e o minimo de varias variaveis//

////

// Hypotenuse Program//

document.getElementById("submit").onclick = function(){

    a = document.getElementById("textA").value;
    a = Number(a)

    b = document.getElementById("textB").value;
    b = Number (b)
    
    c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
    
    document.getElementById("sideC").innerHTML = "Side C:       " +   c;
}

//counter

let ooo =  0;

document.getElementById("decrease").onclick = function(){
    ooo -= 1;
    document.getElementById("counter").innerHTML = ooo;
}
 
document.getElementById("reset").onclick = function(){
    ooo = 0;
    document.getElementById("counter").innerHTML = ooo;
}
 
document.getElementById("increase").onclick = function(){
    ooo += 1;
    document.getElementById("counter").innerHTML = ooo;
}
 

//random number

let a;
let b;
let c;

document.getElementById("roll").onclick = function(){
    a = Math.floor(Math.random() * 6) +1;
    b = Math.floor(Math.random() * 6) +1;
    c = Math.floor(Math.random() * 6) +1;

    document.getElementById("dice1").innerHTML = a;
    document.getElementById("dice2").innerHTML = b;
    document.getElementById("dice3").innerHTML = c;
}

// properties and methods just type the thing press . and will appear a lot of them

let Pizaaaa = "heyaaa";

console.log(Pizaaaa.length); //quantos coisas tem na variavel
console.log(Pizaaaa.indexOf("y")); //qual o numero de certa letra ou caractere
console.log(Pizaaaa.charAt(2));//qual o caractere de certo numero
console.log(Pizaaaa.lastIndexOf("a"));//ultima vez uqe algo aparece
console.log(Pizaaaa.toUpperCase()); // er o nome expllica
console.log(Pizaaaa.toLowerCase()); // """"
console.log(Pizaaaa.replaceAll("a", "o"));
let pastaa = Pizaaaa.slice(4) 
console.log(pastaa)
let flamengo = Pizaaaa.slice(0, 3); // slice n conta um a mais por ex ele conta de 0 a 3 e ent corta no 3, n considera 3 dentro
console.log(flamengo)

//chaining method

let nameLiteral = "Joao";
let letter = nameLiteral.charAt(0).toLocaleLowerCase();


console.log(letter)

// if statement
 let people = 1;
if(people > 1){
    console.log("this is a partey")
}
else{
    console.log("you are lonely")
}

let online = false;

if(online){
    console.log("you are online");
}
else{
    console.log("you are offline")
}

// .checked

/* lvl 1
document.getElementdById("Mybtn").onclick = function(){
    const myCheckBox = document.GetElementById("myCheckBox")
   
    lvl2

  const paypal = document.GetElementById("paypal")
  const master = document.GetElementById("master")
  const visa = document.GetElementById("visa")

   if(myCheckBox.checked){
        console.log("checked")
    }
    else{
        console.log("not Checkd")
    }

   if(paypal.checked){
    console.log("payl checked")
   }
   else if(master.checked){
    console.log("master checked")
   }
    if else(visa.checked){
        console.log("Checkd")
    }
    else{
        console.log("select one please")
    }

}
*/

// switches casos com varias possibilidades

let grade = "A";

switch(grade){
    case grade = "A":
       console.log("Nice");
       break;
    case grade = "B":
        console.log("Good");
        break;
    case grade = "C":
        console.log("Okay");
        break;
    case grade = "D":
        console.log("Meh");
        break;
    case grade = "F":
        console.log("Fail");
        break;

    default:
        console.log ( "Its not a letter grade");
        break;
}

//  And (&&) Or (||) logical operators

let temp = 10

if (temp >= 20 && temp<=30) {
    console.log("perfect for picnic");
}
else{
    console.log("better to stay home.");
}

let celsius = 25

if (celsius >= 36 || celsius <= 10) {
    console.log("Stay home");
}
else{
    console.log("picnic!!!");
}

// NOT logical operator

let sunny = true;

if (!sunny > 0) {  //bolean nao precisa ser colacado entre () outras formas de data sim por ex sunny = 20 (!(sunny <30)) quer dizer q se sunny nao for menor q 30.
    console.log("cold outisde");
}
else{
    console.log("inice outside")
}

// while loop fica repetindo ate alguma condição ser quebrada 

/*let namee = "";

while (namee == "" || namee == null) {
    namee = window.prompt("name");
}

console.log("Hello", namee)*/

// do while loop mesma coisa mas primeiro vc faz algo para dps esse algo ser checkado pela while loop

let nameUser;

do {
    nameUser = window.prompt("name");
} while (nameUser == "" || nameUser == null);

console.log("Hello", nameUser);

// for loops