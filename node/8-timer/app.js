let num = 1;
setInterval(()=>{
    console.log(num++);
}, 1000)
// 영원히 지속

const Interval2 = setInterval(()=>{
    console.log((num++)*3);
}, 1000)

setTimeout(()=>{
    console.log('Time out');
    clearInterval(Interval2);
}, 3000)