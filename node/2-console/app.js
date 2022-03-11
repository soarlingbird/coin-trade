console.log('hi');
console.clear();


console.log('log'); // 개발
console.info('info'); // 중요한 정보 제공
console.warn('warn'); // 발생하면 안되나, 치명적이지 않음
console.error('error'); // 에러, 사용자 에러, 시스템 에러

//일치하지 않을때 뜨는 콘솔
console.assert(2===3, 'not same');
console.assert(2===2, 'same');

//
const student = {name:'ellie', age:20, company: {name: "academy"}};
console.log(student);
console.table(student);
console.dir(student, {showHidden:true, colors:false, depth:0});

//measuring time
console.time('for loop');
for (let i = 0; i<1000000; i++) {
    i++;
}
console.timeEnd('for loop');

//counting
function a() {
    console.count('a function');
}

a();
a();
a();
console.countReset('a function');
a();
a();

//trace for debugging
function f1() {
    f2();
}
function f2() {
    f3();
}
function f3() {
    console.log('f3');
    console.trage();
}
f1();

