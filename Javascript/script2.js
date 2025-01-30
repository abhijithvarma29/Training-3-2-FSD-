//? Named import
// import {name} from "./script1.js";
// import {greet} from "./script1.js";

// console.log(name);
// console.log(greet());
// let msg = greet();
// console.log(msg);

//? Default import
import n from "./script1.js";
import {greet} from "./script1.js";

console.log(n);
console.log(greet());
let msg = greet();
console.log(msg);