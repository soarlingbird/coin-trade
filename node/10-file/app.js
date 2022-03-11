const fs = require('fs');

// fs.renameSync('./file.txt', './file-new.txt') -> 이렇게 하면 죽음

// try{
//     fs.renameSync('./file.txt', './file-new.txt');
// } catch (error) {
//     console.error(error);
// }
// console.log('hello');


try{
    fs.renameSync('./text.txt', './text-new.txt');
} catch (error) {
    console.error(error);
}
console.log('hello');



fs.rename('./text-new.text', './text.text', (error) => {
    console.log(error);
})
console.log('hello');