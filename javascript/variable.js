'use strict';

//2. Variable
// - 변수를 지정하는 유일한 명령어: let
let globalname = 'global name';
{
    let name = 'ellie';
    console.log(name);
    name="hello";
    console.log(name);
    console.log(globalname)
}

//var 절대로 쓰지마라
// - Hoisting 이 되기 때문 (move declaration from bottom to top)
// - Block Notation을 무시하기 때문

console.log(a);
var a = 1;
console.log(a);
// Error 미발생

//console.log(b);
//let b = 1;
//console.log(b);
// Error 발생



//3. Constant
// - Immutable data 가르키고 있는 Pointer가 잠김 (값을 할당한 이후로는 변경 불가)
// - Immutable data type이 좋다!
//   : Security
//   : Thread Safety
//   : Reduce human mistakes

const daysInweek = 7;
// 이렇게 변하지 않는 것들



//4. Variable Types
// - Primitive: Single Item (Number, String, Boolean, Null, Undefined, Symbol)
// - Object: Primitive 여러개를 하나로 묶는 것 (Box Container)
// - Function: Function도 데이터 타입 중 하나. 변수로 할당이 가능 / 함수를 리턴할 수 있음 (First-class function)
const c = 10; // integar
const d = 1.1; // decimal number
console.log(`value: ${c}, type: ${typeof c}`);
console.log(`value: ${d}, type: ${typeof d}`);

const infinity = 1/0;
const negativeinfinity = -1/0;
const NAN = 'not a number'/2;

console.log(infinity);
console.log(negativeinfinity);
console.log(NAN);

//String
const brendan = 'brendan';
const greeting = 'hello ' + brendan;
console.log(greeting)

//Boolean
// - false: 0, null, undefined, NaN, ''
// - true: Any Other value

const e = true; //true
const f = 1>3; //false

//Null
let nothing = null;

//Undefined
let xx = undefined;
let yy; //xx yy 모두 undefined


//Symbol (create unique identifiers for objects)
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2);
console.log(`value: ${symbol1.description}`)


//5. Dynamic Typing
let text = 'hello';
console.log(`value: ${text}, type: ${typeof text}`);
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);
text = 2 +'5';
console.log(`value: ${text}, type: ${typeof text}`);
text = '5'+2;
console.log(`value: ${text}, type: ${typeof text}`);
text = '8'/'2';
console.log(`value: ${text}, type: ${typeof text}`);
