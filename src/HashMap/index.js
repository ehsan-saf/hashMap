import HashMap from "./hashmap.js";

let map = new HashMap();
map.set("ehsan", "safiei");

let value = map.get("ehsan");
console.log(value);

console.log(`saneh is in the map ${map.has("saneh")}`);

console.log(map.get("saneh"));

console.log(`Number of stored keys: ${map.length()}`);

let keys = map.keys();
console.log(keys);

let values = map.values();
console.log(values);

let entries = map.entries();
entries.forEach((entry) => {
  console.log(`---- ${entry} ----`);
});
