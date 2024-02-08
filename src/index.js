import LinkedList from "./list.js";
let list = new LinkedList();
list.append(10);
console.log(list.tail());

list.prepend(20);
console.log(list.head());

list.append(30);
console.log(list.tail());

console.log(list.size());

console.log(list.at(2));

let val = 15;
if (list.contains(val)) {
  console.log(`The list has the value : ${val}`);
} else {
  console.log(`The list does NOT contain the value : ${val}`);
}

console.log(`The index of ${val} is ${list.find(val)}`);

list.toString();

list.insertAt(15, 1);

list.toString();

list.removeAt(3);

list.toString();
