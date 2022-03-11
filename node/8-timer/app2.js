const { nextTick } = require("process");

console.log('code1');
setTimeout(()=>{
    console.log('setTimeout 0');
}, 0);

console.log('code2');
setTimeout(()=>{
    console.log('setTimeout Immediate');
});

process.nextTick(()=> {
    console.log('Process.NextTick')
});