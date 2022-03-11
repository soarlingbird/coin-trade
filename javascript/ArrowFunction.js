'use strict'
//Function 
// - Fundamental building block in the program
// - Subprogram can be used multiple times
// - performs a task or calculates value
// - Function is object in JS

//Function declaration
// - function function_name (input1, input2, ...) {body... return;}
// - one function === one thing to do
// - naming: Command, Verb, DoSomething
// - Avoid: CreateCardAndPoint -> CreateCard, CreatePoint

function printHello(){
    console.log('Hello')
}
printHello();

function log(message){
    console.log(message)
}
log('Hello dude');

//Paramteers
// - primitive parameters: passed by value
// - object paramters: passed by reference

const ellie = {name: "ellie"}

function changeName(obj) {
    obj.name = "coder";
}
changeName(ellie);
console.log(ellie);

//Default parameters (added in ES6)
function showMessage(message, from = "Him") {
    console.log('${message} by ${from}'); // Not Working!!
}
showMessage("Good bye")

//Local Scope (밖에서는 안이 보이지 않고, 안에서는 밖이 보인다.)
let globalMessage = 'global';
function printMessage(){
    let message = 'hello';
    console.log(message);
    console.log(globalMessage);
    function printAnother() {
        console.log(message);
        let childMessage = "hello";
    }
    //console.log(childMessage) (안봐짐)
    return undefined; //Return 이 안보이는 함수는 실제로 이게 생략되어 있는거임
}
printMessage();
//console.log(message); (안봐짐)

//Return a Value
function sum(a,b) {
    return a+b;
}
const a = 1;
const b = 2;
console.log(`sum: ${sum(1,2)}`) //! ${} 이거 왜 안되는겨..

//Early Return, Early Exit 원칙
//Bad Case
function upgradeUser(user){
    if (user.point>10){
        //long upgrade logic...
    }
}

//Good Case
function upgradeUser(user){
    if (user.point <= 10){
        return;
    }
    //long upgrade logic...
}

//CallBack Function Using Function Expression
//함수가 변수로 함수를 호출함
function randomQuiz(answer, Yes, No){
    if (answer === 'HongBeom'){
        Yes();
    }
    else{
        No();
    }
}
const Yes = function(){
    console.log("You are Right");
}
const No = function(){
    console.log("You are Wrong");
}

randomQuiz("HongBeom", Yes, No);
randomQuiz("a", Yes, No);

//Arrow Function
//always anonymous
const simplePrint = () => console.log("ArrowFunction is simple");
simplePrint();

const Sum1 = (a,b) => a+b;
const Sum2 = (a,b) => {
    return a+b;
}

const calculate = (command, a, b) => {
    switch(command){
        case "plus":
            console.log(a+b);
            break;
        case "minus":
            console.log(a-b);
            break;
        case "multiply":
            console.log(a*b);
            break;
        case "divide":
            console.log(a/b);
            break;            
        case "remainder":
            console.log(a%b);
            break;
        case "expotential":
            console.log(a**b);
            break;
    }
}