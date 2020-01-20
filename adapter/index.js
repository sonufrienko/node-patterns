const localStorage = require('./localStorage');

console.log(localStorage.length);
console.log(localStorage.getItem('token'));
localStorage.setItem('token', '456789098765');
console.log(localStorage.getItem('token'));
console.log(localStorage.key(0));
console.log(localStorage.length);
localStorage.removeItem('token');
console.log(localStorage.length);
