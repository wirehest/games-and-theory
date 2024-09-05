import LinkedList from './class-linked-list.js';
import './tests.js'; // dev tests

const list = new LinkedList();

list.append('dog');
list.append('cat');
list.append('parrot');
list.append('hamster');
list.append('snake');
list.append('turtle');

console.assert(
  list.toString() ===
    '( dog ) -> ( cat ) -> ( parrot ) -> ( hamster ) -> ( snake ) -> ( turtle ) -> null',
  'check main.js toString test',
);
