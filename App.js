const fs = require('fs');

fs.readFile('./files/input.txt', 'utf-8', (error, text) => {
  if (error) {
    console.log(error);
  } else {
    console.log(text);
    fs.writeFile('./files/output2.txt', text, 'utf-8', (error) => {
      if (error) {
        console.log(error);
      }
    });
  }
});

/*
sychronus system
let text = fs.readFileSync('./files/input.txt', 'utf-8');
text = `Copide text: ${text}`;
fs.writeFileSync('./files/output.txt', text);
*/
//console.log(text);
// Getting start with circle.js
/*
const circle = require('./circle');

const fun = () => {
  console.log('Bangladesh');
};
const add = (a, b) => {
  return a + b;
};
console.log(add(2, 'ban'));
fun();
console.log(module);
*/
//console.log(circle(3));
//console.log(circle.msg);
//console.log(circle.circumferance(3));
