import linkedList from './linkedList.js';

let list = new linkedList();

list.append('B');
list.append('C');
list.prepend('A');
console.log(list.toString()); // ( A ) -> ( B ) -> ( C ) -> null

console.log(list.size()); // 3
console.log(list.head()); // Node {value: 'A', nextNode: Node}
console.log(list.tail()); // Node {value: 'C', nextNode: null}

console.log(list.at(1)); // Node {value: 'B', nextNode: Node}
console.log(list.at(4)); // Index out of bounds

list.pop();
console.log(list.toString()); // ( A ) -> ( B ) -> null
console.log(list.contains('A')); // true
console.log(list.contains('D')); // false
console.log(list.find('B')); // 1
console.log(list.find('E')); // null

list.prepend('foo');
console.log(list.toString()); // ( foo ) -> ( A ) -> ( B ) -> null
list.insertAt('bar', 2);
console.log(list.toString()); // ( foo ) -> ( A ) -> ( bar ) -> ( B ) -> null
list.insertAt('baz', 8); // Index out of bounds
console.log(list.toString()); // ( foo ) -> ( A ) -> ( bar ) -> ( B ) -> null
list.removeAt(2);
console.log(list.toString()); // ( foo ) -> ( A ) -> ( B ) -> null
list.removeAt(5);
