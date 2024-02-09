import HashSet from "./hashset.js";

console.log("Hi");

let map = new HashSet();
map.set("ehsan");
map.set("saneh");

console.log(`saneh is in the map ${map.has("ehsan")}`);

console.log(`Number of stored keys: ${map.length()}`);

let keys = map.keys();
console.log(keys);

let entries = map.entries();
entries.forEach((entry) => {
  console.log(`---- ${entry} ----`);
});
