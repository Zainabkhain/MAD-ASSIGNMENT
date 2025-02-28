// ZAINAB KHAN (FA22-BSE-032)
// To apply String and Array functions in javascript 

// STRING FUNCTIONS USING DEMO
let str = "Zainab .....BSSE-6";

console.log("=== STRING FUNCTIONS DEMO ===");
console.log(`Original String: "${str}"`);

// String Length....to find length 
console.log(`Length: ${str.length}`);

//  String To  Trim (removes spaces from start and end)
console.log(`Trimmed: "${str.trim()}"`);

// Change Case Using The String 
console.log(`Uppercase: "${str.toUpperCase()}"`);
console.log(`Lowercase: "${str.toLowerCase()}"`);

// Extract Characters
console.log(`Character at index 3: "${str.charAt(3)}"`);
console.log(`Character code at index 3: ${str.charCodeAt(3)}`);

// Searching in String
console.log(`Index of "BSSE": ${str.indexOf("BSSE")}`);
console.log(`Last index of "a": ${str.lastIndexOf("a")}`);
console.log(`Includes "BSSE"?: ${str.includes("BSSE")}`);
console.log(`Starts with "Zainab"?: ${str.startsWith("Zainab")}`);
console.log(`Ends with "6"?: ${str.endsWith("6")}`);

// Extracting Substrings
console.log(`Slice(0, 6): "${str.slice(0, 6)}"`); 
console.log(`Substring(0, 6): "${str.substring(0, 6)}"`);
console.log(`Substr(0, 6): "${str.substr(0, 6)}"`); 
// Replace Text
console.log(`Replace "BSSE" with "Software": "${str.replace("BSSE", "Software")}"`);
console.log(`Replace all "." with "-": "${str.replaceAll(".", "-")}"`);

// Splitting and Joining
console.log(`Split by spaces:`, str.split(" "));
console.log(`Split by "-":`, str.split("-"));
console.log(`Join array back to string:`, ["Zainab", "BSSE", "6"].join(" | "));

// Padding (for fixed-width strings)
console.log(`Pad Start (20 chars, '*'): "${str.padStart(20, '*')}"`);
console.log(`Pad End (20 chars, '*'): "${str.padEnd(20, '*')}"`);

// Repeat String
console.log(`Repeat String 3 times: "${str.repeat(3)}"`);

// Escape Characters
console.log(`Escape Example: "She said, \"I am Zainab and I am in  BSSE-6\""`);

// Unicode Normalization
let str1 = "é";
let str2 = "\u00E9"; // Unicode é
console.log(`Are "é" and "\\u00E9" the same? ${str1 === str2}`);
console.log(`Normalized (NFC): "${str1.normalize()}"`);

//  Use Of Raw String
console.log(String.raw`This is a \n raw string.`);

// this is a multiline string 
let multiLine = `Zainab is 
in BSSE-6`;
console.log(multiLine);
// QUESTION NUMBER 2 : ARRAY FUNCTIONS ON JAVA SCRIPT 
// ARRAY FUNCTIONS DEMO
let arr = ["Zainab", 6, 10, 20, 30, 40, 50];

console.log("=== ARRAY FUNCTIONS DEMO ===");
console.log("Original Array:", arr);

// Array Length
console.log("Length:", arr.length);

// Adding Elements
arr.push(60); // Adds at the end
console.log("After Push(60):", arr);

arr.unshift(5); // Adds at the beginning
console.log("After Unshift(5):", arr);

// Removing Elements
arr.pop(); 
console.log("After Pop():", arr);
// Removes first element
arr.shift(); 
console.log("After Shift():", arr);

// Searching in Array
console.log("Index of 30:", arr.indexOf(30));
console.log("Includes 20?:", arr.includes(20));

// Extracting Part of an Array
console.log("Slice(1, 4):", arr.slice(1, 4)); // Extracts elements from index 1 to 3

// Modifying Array Elements
arr.splice(2, 1, 99); 
console.log("After Splice(2, 1, 99):", arr);

// Reversing and Sorting
console.log("Reversed Array:", arr.reverse());
console.log("Sorted Array:", arr.sort()); // Sorts alphabetically

// Sorting Numerically
let numArr = [40, 10, 5, 99, 20];
console.log("Numerically Sorted:", numArr.sort((a, b) => a - b));

// Iterating and Transforming In Array 
console.log("Mapped (x2):", numArr.map(x => x * 2));
console.log("Filtered (>20):", numArr.filter(x => x > 20));
console.log("Reduced (Sum):", numArr.reduce((sum, num) => sum + num, 0));

// Finding Elements
console.log("Find first > 25:", numArr.find(x => x > 25));
console.log("Find index of first > 25:", numArr.findIndex(x => x > 25));

// Checking Conditions
console.log("Some elements > 40?:", numArr.some(x => x > 40));
console.log("Every element > 5?:", numArr.every(x => x > 5));

// Joining and Flattening In Array 
console.log("Joined Array:", arr.join(" - "));

let nestedArr = [1, [2, 3], [4, [5, 6]]];
console.log("Flattened Array:", nestedArr.flat(2)); 

// Filling an Array
numArr.fill(100, 1, 3); 
console.log("After Fill(100, 1, 3):", numArr);

// Concatenation In Array 
let newArr = arr.concat(["BSSE", "Section-6"]);
console.log("Concatenated Array:", newArr);
