const MyEvent = require('./myEvent');
const myEvent = new MyEvent();

myEvent.on('event1', () => {
  console.log('From myEvent.js ');
});
myEvent.function1();

/* EventEmmiter
const EventEmitter = require('events');
const emitter = new EventEmitter();

emitter.on('abc', () => {
  console.log('Bangladesh');
});

emitter.on('event1', (e) => {
  console.log('Event 1 is calling', e);
});
emitter.on('event2', () => {
  console.log('Event 2 is calling');
});
emitter.emit('event1', { name: 'fayjul', id: '123' });
*/
/* synchronus and asynchronus module
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
*/

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
