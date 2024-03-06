'use strict';

let user = {};
let printableUser = () => JSON.stringify(user);

console.log(`1. empty user object: ${printableUser()}`);

user.name = 'John'; // alt. user['name'] = 'John';
console.log(`2. add property 'name': 'John': ${printableUser()}`)

user.surname = 'Smith';
console.log(`3. add property 'surname': 'Smith: ${printableUser()}`);

user.name = 'Pete';
console.log(`4. user name now Pete: ${printableUser()}`);

delete user.name;
console.log(`5. delete user.name: ${printableUser()}`);