import { merge } from "./merge";

const col1 = [1, 3, 5];
const col2 = [6, 4, 2];  // already in descending order
const col3 = [7, 8, 9];

const result = merge(col1, col2, col3);
console.log("Merged result:", result);