const username = Symbol('username');
const password = Symbol('password');

const user = {
    [username]: 'rithesh',
    [password]: '1234322',
    age: 33
};

console.log(Symbol.for('username'));
console.log(username);
console.log(user.password);